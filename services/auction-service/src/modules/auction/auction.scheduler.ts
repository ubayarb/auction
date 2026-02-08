import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { PrismaService } from '../../prisma/prisma.service';
import { RedisService } from '../../redis/redis.service';
import { AuctionService } from './auction.service';
import { BidGateway } from '../bid/bid.gateway';

@Injectable()
export class AuctionScheduler {
  private readonly logger = new Logger(AuctionScheduler.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly redis: RedisService,
    private readonly auctionService: AuctionService,
    private readonly bidGateway: BidGateway,
  ) {}

  // Эхлэх хугацаа болсон дуудлага худалдааг идэвхжүүлэх
  @Cron(CronExpression.EVERY_MINUTE)
  async activateScheduledAuctions() {
    const now = new Date();

    const auctions = await this.prisma.auction.findMany({
      where: {
        status: 'SCHEDULED',
        startTime: { lte: now },
      },
    });

    for (const auction of auctions) {
      try {
        await this.auctionService.startAuction(auction.id);
        this.logger.log(`Дуудлага худалдаа идэвхжүүллээ: ${auction.id}`);

        // 📡 WebSocket мэдэгдэл
        this.bidGateway.emitAuctionStarted(auction.id, {
          title: auction.title,
          startingPrice: Number(auction.startingPrice),
          endTime: auction.endTime.toISOString(),
        });
      } catch (error) {
        this.logger.error(`Идэвхжүүлэх алдаа: ${auction.id}`, error);
      }
    }
  }

  // Дуусах хугацаа болсон дуудлага худалдааг дуусгах
  @Cron(CronExpression.EVERY_MINUTE)
  async endExpiredAuctions() {
    const now = new Date();

    const auctions = await this.prisma.auction.findMany({
      where: {
        status: { in: ['ACTIVE', 'EXTENDED'] },
        endTime: { lte: now },
      },
    });

    for (const auction of auctions) {
      try {
        const result = await this.auctionService.endAuction(auction.id);
        this.logger.log(`Дуудлага худалдаа дууслаа: ${auction.id}`);

        // 📡 WebSocket мэдэгдэл
        this.bidGateway.emitAuctionEnded(auction.id, {
          status: result.status,
          winnerId: result.winnerId ?? undefined,
          winningPrice: result.winningPrice ? Number(result.winningPrice) : undefined,
          reason: result.status === 'COMPLETED' ? 'TIME_EXPIRED' : 'NO_WINNER',
        });

        // Redis cleanup
        await this.redis.cleanupAuction(auction.id);
      } catch (error) {
        this.logger.error(`Дуусгах алдаа: ${auction.id}`, error);
      }
    }
  }

  // Дууссан дуудлага худалдааны барьцааг буцаах (ялагчаас бусад)
  @Cron(CronExpression.EVERY_10_MINUTES)
  async refundDeposits() {
    const completedAuctions = await this.prisma.auction.findMany({
      where: {
        status: { in: ['COMPLETED', 'FAILED', 'CANCELLED'] },
        deposits: {
          some: { status: 'PAID' },
        },
      },
      include: { deposits: { where: { status: 'PAID' } } },
    });

    for (const auction of completedAuctions) {
      for (const deposit of auction.deposits) {
        // Ялагчийн барьцааг буцаахгүй
        if (auction.winnerId === deposit.userId) continue;

        try {
          await this.prisma.auctionDeposit.update({
            where: { id: deposit.id },
            data: { status: 'REFUNDED', refundedAt: new Date() },
          });
          this.logger.log(`Барьцаа буцаагдлаа: ${deposit.id}`);
        } catch (error) {
          this.logger.error(`Барьцаа буцаах алдаа: ${deposit.id}`, error);
        }
      }
    }
  }
}
