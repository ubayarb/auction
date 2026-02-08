import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { NotificationChannel, NotificationStatus, NotificationType } from '../generated/prisma';
import { EmailService } from '../email/email.service';
import { PushService } from '../push/push.service';

interface SendNotificationDto {
  userId: string;
  type: NotificationType;
  title: string;
  message: string;
  data?: any;
  channels?: NotificationChannel[];
  scheduledAt?: Date;
}

@Injectable()
export class NotificationService {
  private readonly logger = new Logger(NotificationService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly emailService: EmailService,
    private readonly pushService: PushService,
  ) {}

  /**
   * Мэдэгдэл илгээх
   */
  async send(dto: SendNotificationDto) {
    const channels = dto.channels || [NotificationChannel.IN_APP, NotificationChannel.EMAIL];
    const settings = await this.prisma.userNotificationSetting.findUnique({
      where: { userId: dto.userId },
    });

    const activeChannels = channels.filter((ch) => this.isChannelEnabled(ch, settings));
    const notifications = await Promise.all(
      activeChannels.map((channel) => this.createAndSendNotification(dto, channel)),
    );

    return notifications;
  }

  private isChannelEnabled(channel: NotificationChannel, settings: any): boolean {
    if (!settings) return true;
    const channelMap: Record<string, boolean> = {
      [NotificationChannel.EMAIL]: settings.emailEnabled,
      [NotificationChannel.PUSH]: settings.pushEnabled,
      [NotificationChannel.SMS]: settings.smsEnabled,
      [NotificationChannel.IN_APP]: settings.inAppEnabled,
    };
    return channelMap[channel] !== false;
  }

  private async createAndSendNotification(dto: SendNotificationDto, channel: NotificationChannel) {
    const template = await this.prisma.notificationTemplate.findFirst({
      where: { code: dto.type, channel, isActive: true },
    });

    const notification = await this.prisma.notification.create({
      data: {
        userId: dto.userId,
        templateId: template?.id,
        channel,
        type: dto.type,
        title: dto.title,
        message: dto.message,
        data: dto.data || {},
        status: NotificationStatus.PENDING,
        scheduledAt: dto.scheduledAt,
      },
    });

    if (!dto.scheduledAt) {
      await this.processNotification(notification.id);
    }

    return notification;
  }

  /**
   * Мэдэгдлийг боловсруулах (илгээх)
   */
  async processNotification(notificationId: string) {
    const notification = await this.prisma.notification.findUnique({
      where: { id: notificationId },
    });

    if (!notification) return;

    try {
      switch (notification.channel) {
        case NotificationChannel.EMAIL:
          await this.emailService.send({
            userId: notification.userId,
            subject: notification.title,
            body: notification.message,
            data: notification.data as any,
          });
          break;

        case NotificationChannel.PUSH:
          await this.pushService.send({
            userId: notification.userId,
            title: notification.title,
            body: notification.message,
            data: notification.data as any,
          });
          break;

        case NotificationChannel.IN_APP:
          // IN_APP мэдэгдэл нь DB-д хадгалагдсан учир нэмэлт ажил шаардлагагүй
          break;

        case NotificationChannel.SMS:
          // SMS integration - not yet implemented
          this.logger.warn('SMS илгээлт хэрэгжээгүй');
          break;
      }

      await this.prisma.notification.update({
        where: { id: notificationId },
        data: { status: NotificationStatus.SENT, sentAt: new Date() },
      });
    } catch (error: any) {
      this.logger.error(`Мэдэгдэл илгээхэд алдаа: ${error.message}`, error.stack);

      await this.prisma.notification.update({
        where: { id: notificationId },
        data: {
          status: NotificationStatus.FAILED,
          failedAt: new Date(),
          failReason: error.message,
          retryCount: { increment: 1 },
        },
      });
    }
  }

  /**
   * Хэрэглэгчийн мэдэгдлүүд
   */
  async getUserNotifications(
    userId: string,
    page = 1,
    limit = 20,
    unreadOnly = false,
  ) {
    const where: any = { userId, channel: NotificationChannel.IN_APP };
    if (unreadOnly) {
      where.readAt = null;
    }

    const [data, total] = await Promise.all([
      this.prisma.notification.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        skip: (page - 1) * limit,
        take: limit,
      }),
      this.prisma.notification.count({ where }),
    ]);

    return {
      data,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  /**
   * Уншаагүй мэдэгдлийн тоо
   */
  async getUnreadCount(userId: string) {
    return this.prisma.notification.count({
      where: {
        userId,
        channel: NotificationChannel.IN_APP,
        readAt: null,
      },
    });
  }

  /**
   * Мэдэгдэл уншсан гэж тэмдэглэх
   */
  async markAsRead(notificationId: string, userId: string) {
    const notification = await this.prisma.notification.findFirst({
      where: { id: notificationId, userId },
    });

    if (!notification) throw new NotFoundException('Мэдэгдэл олдсонгүй');

    return this.prisma.notification.update({
      where: { id: notificationId },
      data: { readAt: new Date(), status: NotificationStatus.READ },
    });
  }

  /**
   * Бүх мэдэгдлийг уншсан болгох
   */
  async markAllAsRead(userId: string) {
    return this.prisma.notification.updateMany({
      where: { userId, readAt: null, channel: NotificationChannel.IN_APP },
      data: { readAt: new Date(), status: NotificationStatus.READ },
    });
  }

  /**
   * Тохиргоо авах
   */
  async getSettings(userId: string) {
    let settings = await this.prisma.userNotificationSetting.findUnique({
      where: { userId },
    });

    settings ??= await this.prisma.userNotificationSetting.create({
      data: { userId },
    });

    return settings;
  }

  /**
   * Тохиргоо шинэчлэх
   */
  async updateSettings(userId: string, data: any) {
    return this.prisma.userNotificationSetting.upsert({
      where: { userId },
      create: { userId, ...data },
      update: data,
    });
  }
}
