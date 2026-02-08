import {
  Injectable,
  BadRequestException,
  ForbiddenException,
  NotFoundException,
  ConflictException,
  Logger,
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { RedisService } from '../../redis/redis.service';
import { AuctionService } from '../auction/auction.service';

export interface PlaceBidOptions {
  isAutoBid?: boolean;
  maxAmount?: number;
  ipAddress?: string;
  userAgent?: string;
}

export interface BidResult {
  bid: any;
  auction: any;
  autoBidTriggered?: boolean;
  previousBidder?: string;
}

@Injectable()
export class BidService {
  private readonly logger = new Logger(BidService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly redis: RedisService,
    private readonly auctionService: AuctionService,
  ) {}

  /**
   * 🔒 Redis Lock + DB Transaction ашиглан bid тавих
   * Race condition-оос хамгаалсан enterprise түвшний шийдэл
   */
  async placeBid(
    auctionId: string,
    bidderId: string,
    amount: number,
    options?: PlaceBidOptions,
  ): Promise<BidResult> {
    // 1. Rate limit шалгах (5 bid / минут)
    const rateLimit = await this.redis.checkRateLimit(
      `bid:${bidderId}`,
      5,
      60000,
    );

    if (!rateLimit.allowed) {
      throw new BadRequestException(
        `Хэт олон санал тавилаа. ${Math.ceil(rateLimit.retryAfterMs / 1000)} секундын дараа дахин оролдоно уу`,
      );
    }

    // 2. Distributed lock авах (race condition-оос хамгаалах)
    const lockKey = `auction:${auctionId}:bid`;
    const lockValue = await this.redis.acquireLock(lockKey, 10000, 5, 300);

    if (!lockValue) {
      throw new ConflictException(
        'Өөр санал боловсруулагдаж байна. Түр хүлээнэ үү.',
      );
    }

    try {
      // 3. DB Transaction дотор бүх логик
      return await this.prisma.$transaction(async (tx) => {
        // 3a. Auction-г цоожтой унших
        const auction = await tx.auction.findUnique({
          where: { id: auctionId },
          include: {
            deposits: { where: { userId: bidderId, status: 'PAID' } },
          },
        });

        // 3b-3e. Auction болон bidder шалгах (throws if invalid)
        const now = this.validateBidEligibility(auction, bidderId);
        // After validation, auction is guaranteed non-null
        const validAuction = auction!;

        // 3f. Одоогийн хамгийн өндөр санал
        const currentHighest = await tx.bid.findFirst({
          where: { auctionId, status: { in: ['ACTIVE', 'WINNING'] } },
          orderBy: { amount: 'desc' },
        });

        // 3g. Хамгийн бага үнэ тооцоолох
        const minimumBid = this.calculateMinimumBid(currentHighest, validAuction);

        if (amount < minimumBid) {
          throw new BadRequestException(
            `Хамгийн бага санал: ${minimumBid.toLocaleString()}₮`,
          );
        }

        // 3h. Өөрийн санал хамгийн өндөр бол давтахгүй
        if (currentHighest?.bidderId === bidderId) {
          throw new BadRequestException('Таны санал аль хэдийн хамгийн өндөр байна');
        }

        // 3i. Shill bidding илрүүлэлт
        await this.checkShillBidding(tx, auctionId, bidderId, options, currentHighest);

        // 3j. Өмнөх bid-үүдийг OUTBID болгох
        if (currentHighest) {
          await tx.bid.updateMany({
            where: { auctionId, status: { in: ['ACTIVE', 'WINNING'] } },
            data: { status: 'OUTBID' },
          });
        }

        // 3k. Шинэ bid үүсгэх
        const bid = await tx.bid.create({
          data: {
            auctionId,
            bidderId,
            amount,
            status: 'ACTIVE',
            isAutoBid: options?.isAutoBid || false,
            maxAmount: options?.maxAmount,
            ipAddress: options?.ipAddress,
            userAgent: options?.userAgent,
          },
        });

        // 3l. Participant tracking + auction update
        await this.redis.addParticipant(auctionId, bidderId);
        const participantCount = await this.redis.getParticipantCount(auctionId);

        await tx.auction.update({
          where: { id: auctionId },
          data: {
            currentPrice: amount,
            bidCount: { increment: 1 },
            participantCount,
          },
        });

        // 3m. Anti-sniping шалгах
        await this.handleAntiSniping(tx, validAuction, now);

        // 3n-3o. Leaderboard + cache
        await this.redis.updateLeaderboard(auctionId, bidderId, amount);
        await this.redis.invalidateAuctionCache(auctionId);

        // 3p. Шинэчлэгдсэн auction
        const updatedAuction = await tx.auction.findUnique({
          where: { id: auctionId },
          include: { _count: { select: { bids: true } } },
        });

        const result: BidResult = {
          bid,
          auction: updatedAuction,
          previousBidder: currentHighest?.bidderId,
        };

        // 3q. Auto-bid шалгах
        if (currentHighest?.isAutoBid && currentHighest.maxAmount) {
          const nextAutoBid = amount + Number(validAuction.bidIncrement);
          if (nextAutoBid <= Number(currentHighest.maxAmount)) {
            result.autoBidTriggered = true;
          }
        }

        return result;
      }, {
        timeout: 15000,
      });
    } finally {
      // 4. Lock чөлөөлөх (заавал!)
      await this.redis.releaseLock(lockKey, lockValue);
    }
  }

  // ==========================================
  // Private Helper Methods — Complexity Reduction
  // ==========================================

  private validateBidEligibility(auction: any, bidderId: string): Date {
    if (!auction) {
      throw new NotFoundException('Дуудлага худалдаа олдсонгүй');
    }
    if (!['ACTIVE', 'EXTENDED'].includes(auction.status)) {
      throw new BadRequestException('Дуудлага худалдаа идэвхгүй байна');
    }
    const now = new Date();
    if (now < auction.startTime || now > auction.endTime) {
      throw new BadRequestException('Дуудлага худалдааны хугацаа хэтэрсэн байна');
    }
    if (auction.sellerId === bidderId) {
      throw new ForbiddenException('Эзэмшигч өөрийн дуудлага худалдаанд санал тавих боломжгүй');
    }
    if (auction.depositRequired && auction.deposits.length === 0) {
      throw new BadRequestException('Эхлээд барьцаа төлнө үү');
    }
    return now;
  }

  private calculateMinimumBid(currentHighest: any, auction: any): number {
    const currentHighestAmount = currentHighest ? Number(currentHighest.amount) : 0;
    return currentHighest
      ? currentHighestAmount + Number(auction.bidIncrement)
      : Number(auction.startingPrice);
  }

  private async checkShillBidding(
    tx: any,
    auctionId: string,
    bidderId: string,
    options: PlaceBidOptions | undefined,
    currentHighest: any,
  ): Promise<void> {
    if (!options?.ipAddress || !currentHighest) return;

    const recentBidFromIP = await tx.bid.findFirst({
      where: {
        auctionId,
        ipAddress: options.ipAddress,
        bidderId: { not: bidderId },
        createdAt: { gte: new Date(Date.now() - 3600000) },
      },
    });

    if (recentBidFromIP) {
      this.logger.warn(
        `⚠️ Shill bidding сэжиг: auction=${auctionId}, bidder=${bidderId}, sameIP=${options.ipAddress}`,
      );
    }
  }

  private async handleAntiSniping(tx: any, auction: any, now: Date): Promise<void> {
    if (!auction.antiSnipingEnabled) return;

    const timeLeft = auction.endTime.getTime() - now.getTime();
    const snipingThreshold = auction.antiSnipingMinutes * 60000;

    if (timeLeft >= snipingThreshold || auction.extensionsUsed >= auction.maxExtensions) return;

    const newEndTime = new Date(auction.endTime.getTime() + auction.extensionMinutes * 60000);

    await tx.auction.update({
      where: { id: auction.id },
      data: {
        endTime: newEndTime,
        status: 'EXTENDED',
        extensionsUsed: { increment: 1 },
      },
    });

    this.logger.log(
      `⏰ Anti-sniping: auction=${auction.id} хугацаа сунгагдлаа → ${newEndTime.toISOString()}`,
    );
  }

  /**
   * 🤖 Auto-bid (Proxy bidding) — хэрэглэгчийн дээд хязгаар хүртэл автоматаар санал тавих
   */
  async processAutoBid(
    auctionId: string,
    outbidUserId: string,
    currentAmount: number,
  ): Promise<BidResult | null> {
    try {
      const autoBidRecord = await this.prisma.bid.findFirst({
        where: {
          auctionId,
          bidderId: outbidUserId,
          isAutoBid: true,
          maxAmount: { not: null },
        },
        orderBy: { createdAt: 'desc' },
      });

      if (!autoBidRecord?.maxAmount) return null;

      const auction = await this.prisma.auction.findUnique({
        where: { id: auctionId },
      });
      if (!auction) return null;

      const nextAmount = currentAmount + Number(auction.bidIncrement);
      const maxAmount = Number(autoBidRecord.maxAmount);

      if (nextAmount <= maxAmount) {
        this.logger.log(
          `🤖 Auto-bid: user=${outbidUserId}, amount=${nextAmount}, max=${maxAmount}`,
        );

        return this.placeBid(auctionId, outbidUserId, nextAmount, {
          isAutoBid: true,
          maxAmount,
        });
      }

      this.logger.log(
        `🤖 Auto-bid хязгаар хэтэрсэн: user=${outbidUserId}, need=${nextAmount}, max=${maxAmount}`,
      );
      return null;
    } catch (error: any) {
      this.logger.error(`Auto-bid алдаа: ${error.message}`, error.stack);
      return null;
    }
  }

  /**
   * 💰 Buy Now — шууд худалдан авах
   */
  async buyNow(
    auctionId: string,
    buyerId: string,
    options?: { ipAddress?: string; userAgent?: string },
  ): Promise<BidResult> {
    const lockKey = `auction:${auctionId}:buynow`;
    const lockValue = await this.redis.acquireLock(lockKey, 15000, 3, 500);

    if (!lockValue) {
      throw new ConflictException('Өөр худалдан авалт боловсруулагдаж байна');
    }

    try {
      return await this.prisma.$transaction(async (tx) => {
        const auction = await tx.auction.findUnique({
          where: { id: auctionId },
          include: {
            deposits: { where: { userId: buyerId, status: 'PAID' } },
          },
        });

        if (!auction) throw new NotFoundException('Дуудлага худалдаа олдсонгүй');

        if (!['ACTIVE', 'EXTENDED'].includes(auction.status)) {
          throw new BadRequestException('Дуудлага худалдаа идэвхгүй байна');
        }

        if (!auction.buyNowPrice) {
          throw new BadRequestException('Шууд худалдан авах боломжгүй');
        }

        if (auction.sellerId === buyerId) {
          throw new ForbiddenException('Эзэмшигч өөрийн зүйлийг худалдан авах боломжгүй');
        }

        if (auction.depositRequired && auction.deposits.length === 0) {
          throw new BadRequestException('Эхлээд барьцаа төлнө үү');
        }

        const buyNowAmount = Number(auction.buyNowPrice);

        // Бүх өмнөх bid-үүдийг OUTBID болгох
        await tx.bid.updateMany({
          where: { auctionId, status: { in: ['ACTIVE', 'WINNING'] } },
          data: { status: 'OUTBID' },
        });

        // Buy Now bid
        const bid = await tx.bid.create({
          data: {
            auctionId,
            bidderId: buyerId,
            amount: buyNowAmount,
            status: 'WON',
            ipAddress: options?.ipAddress,
            userAgent: options?.userAgent,
          },
        });

        // Auction-г COMPLETED болгох
        const updatedAuction = await tx.auction.update({
          where: { id: auctionId },
          data: {
            status: 'COMPLETED',
            currentPrice: buyNowAmount,
            winnerId: buyerId,
            winningBidId: bid.id,
            winningPrice: buyNowAmount,
            bidCount: { increment: 1 },
          },
          include: { _count: { select: { bids: true } } },
        });

        await this.redis.invalidateAuctionCache(auctionId);

        this.logger.log(
          `💰 Buy Now: auction=${auctionId}, buyer=${buyerId}, price=${buyNowAmount}`,
        );

        return { bid, auction: updatedAuction };
      }, { timeout: 15000 });
    } finally {
      await this.redis.releaseLock(lockKey, lockValue);
    }
  }

  /**
   * 📜 Bid түүх
   */
  async getBidHistory(auctionId: string, page = 1, limit = 50) {
    const skip = (page - 1) * limit;

    const [bids, total] = await Promise.all([
      this.prisma.bid.findMany({
        where: { auctionId },
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
        select: {
          id: true,
          bidderId: true,
          amount: true,
          status: true,
          isAutoBid: true,
          createdAt: true,
        },
      }),
      this.prisma.bid.count({ where: { auctionId } }),
    ]);

    return {
      data: bids,
      meta: { total, page, limit, totalPages: Math.ceil(total / limit) },
    };
  }

  /**
   * 👤 Миний саналууд
   */
  async getMyBids(userId: string, page = 1, limit = 20) {
    const skip = (page - 1) * limit;

    const [bids, total] = await Promise.all([
      this.prisma.bid.findMany({
        where: { bidderId: userId },
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
        include: {
          auction: {
            select: {
              id: true,
              title: true,
              status: true,
              currentPrice: true,
              endTime: true,
              winnerId: true,
            },
          },
        },
      }),
      this.prisma.bid.count({ where: { bidderId: userId } }),
    ]);

    return {
      data: bids,
      meta: { total, page, limit, totalPages: Math.ceil(total / limit) },
    };
  }

  /**
   * 🏆 Leaderboard
   */
  async getLeaderboard(auctionId: string, top = 10) {
    return this.redis.getLeaderboard(auctionId, top);
  }
}
