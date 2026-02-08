import {
  Injectable,
  NotFoundException,
  BadRequestException,
  ForbiddenException,
  Logger,
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { RedisService } from '../../redis/redis.service';
import { CreateAuctionDto } from './dto/create-auction.dto';
import { Prisma } from '../../generated/prisma';

@Injectable()
export class AuctionService {
  private readonly logger = new Logger(AuctionService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly redis: RedisService,
  ) {}

  async create(dto: CreateAuctionDto, sellerId: string) {
    if (new Date(dto.startTime) >= new Date(dto.endTime)) {
      throw new BadRequestException('Дуусах хугацаа нь эхлэх хугацаанаас хойш байх ёстой');
    }

    if (new Date(dto.startTime) < new Date()) {
      throw new BadRequestException('Эхлэх хугацаа нь ирээдүйд байх ёстой');
    }

    const depositAmount = dto.depositAmount || (Number(dto.startingPrice) * (dto.depositPercent || 10)) / 100;

    const auction = await this.prisma.auction.create({
      data: {
        propertyId: dto.propertyId,
        sellerId,
        title: dto.title,
        description: dto.description,
        type: dto.type as any || 'ENGLISH',
        startingPrice: dto.startingPrice,
        reservePrice: dto.reservePrice,
        currentPrice: dto.startingPrice,
        bidIncrement: dto.bidIncrement,
        buyNowPrice: dto.buyNowPrice,
        startTime: new Date(dto.startTime),
        endTime: new Date(dto.endTime),
        originalEndTime: new Date(dto.endTime),
        extensionMinutes: dto.extensionMinutes || 5,
        depositRequired: dto.depositRequired ?? true,
        depositAmount,
        depositPercent: dto.depositPercent || 10,
        antiSnipingEnabled: dto.antiSnipingEnabled ?? true,
        antiSnipingMinutes: dto.antiSnipingMinutes || 5,
        terms: dto.terms,
        isPublic: dto.isPublic ?? true,
        autoExtend: dto.autoExtend ?? true,
        maxExtensions: dto.maxExtensions || 10,
        status: 'PENDING_APPROVAL',
      },
    });

    return auction;
  }

  async findById(id: string) {
    // Redis cache шалгах
    const cached = await this.redis.getCachedAuction(id);
    if (cached) return cached;

    const auction = await this.prisma.auction.findUnique({
      where: { id },
      include: {
        bids: {
          orderBy: { amount: 'desc' },
          take: 50,
          select: {
            id: true,
            bidderId: true,
            amount: true,
            status: true,
            isAutoBid: true,
            createdAt: true,
          },
        },
        deposits: true,
        _count: { select: { bids: true, deposits: true } },
      },
    });

    if (!auction) {
      throw new NotFoundException('Дуудлага худалдаа олдсонгүй');
    }

    // Cache-д хадгалах (30 секунд)
    await this.redis.cacheAuction(id, auction, 30);

    return auction;
  }

  async search(page = 1, limit = 20, status?: string, type?: string) {
    const skip = (page - 1) * limit;
    const where: Prisma.AuctionWhereInput = {};

    if (status) where.status = status as any;
    if (type) where.type = type as any;

    // Default: зөвхөн идэвхтэй болон төлөвлөсөн
    if (!status) {
      where.status = { in: ['ACTIVE', 'SCHEDULED', 'EXTENDED'] };
    }

    const [auctions, total] = await Promise.all([
      this.prisma.auction.findMany({
        where,
        skip,
        take: limit,
        orderBy: { startTime: 'asc' },
        include: {
          _count: { select: { bids: true } },
        },
      }),
      this.prisma.auction.count({ where }),
    ]);

    return {
      data: auctions,
      meta: { total, page, limit, totalPages: Math.ceil(total / limit) },
    };
  }

  async approve(id: string) {
    const auction = await this.prisma.auction.findUnique({ where: { id } });
    if (!auction) throw new NotFoundException('Дуудлага худалдаа олдсонгүй');
    if (auction.status !== 'PENDING_APPROVAL') {
      throw new BadRequestException('Зөвхөн хүлээгдэж буй дуудлага худалдааг батлах боломжтой');
    }

    return this.prisma.auction.update({
      where: { id },
      data: { status: 'SCHEDULED' },
    });
  }

  async cancel(id: string, userId: string) {
    const auction = await this.prisma.auction.findUnique({ where: { id } });
    if (!auction) throw new NotFoundException('Дуудлага худалдаа олдсонгүй');
    if (auction.sellerId !== userId) {
      throw new ForbiddenException('Зөвхөн эзэмшигч цуцлах боломжтой');
    }
    if (auction.status === 'COMPLETED') {
      throw new BadRequestException('Дууссан дуудлага худалдааг цуцлах боломжгүй');
    }

    return this.prisma.auction.update({
      where: { id },
      data: { status: 'CANCELLED' },
    });
  }

  async startAuction(id: string) {
    return this.prisma.auction.update({
      where: { id },
      data: { status: 'ACTIVE' },
    });
  }

  async endAuction(id: string) {
    const auction = await this.prisma.auction.findUnique({
      where: { id },
      include: {
        bids: { orderBy: { amount: 'desc' }, take: 1 },
      },
    });

    if (!auction) throw new NotFoundException();

    const winningBid = auction.bids[0];

    if (winningBid) {
      // Reserve price шалгах
      const meetsReserve = !auction.reservePrice || Number(winningBid.amount) >= Number(auction.reservePrice);

      if (meetsReserve) {
        // Ялагч тогтоох
        await this.prisma.bid.update({
          where: { id: winningBid.id },
          data: { status: 'WON' },
        });

        return this.prisma.auction.update({
          where: { id },
          data: {
            status: 'COMPLETED',
            winnerId: winningBid.bidderId,
            winningBidId: winningBid.id,
            winningPrice: winningBid.amount,
          },
        });
      }
    }

    // Ялагч байхгүй
    return this.prisma.auction.update({
      where: { id },
      data: { status: 'FAILED' },
    });
  }

  async extendAuction(id: string) {
    const auction = await this.prisma.auction.findUnique({ where: { id } });
    if (!auction) throw new NotFoundException();

    if (auction.extensionsUsed >= auction.maxExtensions) {
      return auction; // Нэмэлт хугацаа дууссан
    }

    const newEndTime = new Date(auction.endTime.getTime() + auction.extensionMinutes * 60000);

    return this.prisma.auction.update({
      where: { id },
      data: {
        endTime: newEndTime,
        status: 'EXTENDED',
        extensionsUsed: { increment: 1 },
      },
    });
  }

  async payDeposit(auctionId: string, userId: string) {
    const auction = await this.prisma.auction.findUnique({ where: { id: auctionId } });
    if (!auction) throw new NotFoundException('Дуудлага худалдаа олдсонгүй');

    if (!auction.depositRequired) {
      throw new BadRequestException('Энэ дуудлага худалдаанд барьцаа шаардлагагүй');
    }

    const existing = await this.prisma.auctionDeposit.findUnique({
      where: { auctionId_userId: { auctionId, userId } },
    });

    if (existing) {
      throw new BadRequestException('Аль хэдийн барьцаа төлсөн байна');
    }

    return this.prisma.auctionDeposit.create({
      data: {
        auctionId,
        userId,
        amount: auction.depositAmount || 0,
        status: 'PAID',
        paidAt: new Date(),
      },
    });
  }

  async getMyAuctions(userId: string, page = 1, limit = 20) {
    const skip = (page - 1) * limit;
    const [auctions, total] = await Promise.all([
      this.prisma.auction.findMany({
        where: { sellerId: userId },
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
        include: { _count: { select: { bids: true } } },
      }),
      this.prisma.auction.count({ where: { sellerId: userId } }),
    ]);

    return {
      data: auctions,
      meta: { total, page, limit, totalPages: Math.ceil(total / limit) },
    };
  }

  /**
   * 👁️ View count нэмэх
   */
  async incrementViewCount(id: string) {
    try {
      await this.prisma.auction.update({
        where: { id },
        data: { viewCount: { increment: 1 } },
      });
      await this.redis.invalidateAuctionCache(id);
    } catch {
      // View count алдаа нь critical биш
    }
  }

  /**
   * 📊 Auction-ийн статистик (онлайн, оролцогч гэх мэт)
   */
  async getAuctionStats(id: string) {
    const [auction, onlineCount, leaderboard] = await Promise.all([
      this.prisma.auction.findUnique({
        where: { id },
        select: {
          bidCount: true,
          participantCount: true,
          viewCount: true,
          currentPrice: true,
          startingPrice: true,
          status: true,
        },
      }),
      this.redis.getOnlineCount(id),
      this.redis.getLeaderboard(id, 5),
    ]);

    if (!auction) throw new NotFoundException('Дуудлага худалдаа олдсонгүй');

    return {
      ...auction,
      onlineCount,
      leaderboard,
      priceIncrease: auction.currentPrice
        ? Number(auction.currentPrice) - Number(auction.startingPrice)
        : 0,
    };
  }
}
