import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { PrismaService } from '../prisma/prisma.service';
import { NotificationService } from './notification.service';
import { NotificationStatus } from '../generated/prisma';

@Injectable()
export class NotificationScheduler {
  private readonly logger = new Logger(NotificationScheduler.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly notificationService: NotificationService,
  ) {}

  /**
   * Товлосон мэдэгдлүүдийг илгээх (минут бүр)
   */
  @Cron(CronExpression.EVERY_MINUTE)
  async processScheduledNotifications() {
    const scheduled = await this.prisma.notification.findMany({
      where: {
        status: NotificationStatus.PENDING,
        scheduledAt: { lte: new Date() },
      },
      take: 50,
    });

    for (const notification of scheduled) {
      try {
        await this.notificationService.processNotification(notification.id);
      } catch (error: any) {
        this.logger.error(
          `Товлосон мэдэгдэл илгээхэд алдаа: ${notification.id}`,
          error.stack,
        );
      }
    }

    if (scheduled.length > 0) {
      this.logger.log(`${scheduled.length} товлосон мэдэгдэл боловсруулагдлаа`);
    }
  }

  /**
   * Амжилтгүй мэдэгдлүүдийг дахин оролдох (5 минут бүр)
   */
  @Cron(CronExpression.EVERY_5_MINUTES)
  async retryFailedNotifications() {
    const failed = await this.prisma.notification.findMany({
      where: {
        status: NotificationStatus.FAILED,
        retryCount: { lt: 3 },
      },
      take: 20,
    });

    for (const notification of failed) {
      try {
        await this.notificationService.processNotification(notification.id);
      } catch (error: any) {
        this.logger.error(
          `Дахин оролдоход алдаа: ${notification.id}`,
          error.stack,
        );
      }
    }

    if (failed.length > 0) {
      this.logger.log(`${failed.length} амжилтгүй мэдэгдэл дахин оролдов`);
    }
  }

  /**
   * Хуучин мэдэгдлүүдийг цэвэрлэх (өдөр бүр шөнийн 3 цагт)
   */
  @Cron('0 3 * * *')
  async cleanupOldNotifications() {
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const deleted = await this.prisma.notification.deleteMany({
      where: {
        status: { in: [NotificationStatus.READ, NotificationStatus.SENT] },
        createdAt: { lt: thirtyDaysAgo },
      },
    });

    this.logger.log(`${deleted.count} хуучин мэдэгдэл цэвэрлэгдлээ`);
  }
}
