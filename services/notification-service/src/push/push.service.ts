import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../prisma/prisma.service';

interface SendPushDto {
  userId: string;
  title: string;
  body: string;
  data?: Record<string, any>;
}

@Injectable()
export class PushService {
  private readonly logger = new Logger(PushService.name);

  constructor(
    private config: ConfigService,
    private prisma: PrismaService,
  ) {}

  /**
   * Push мэдэгдэл илгээх (Firebase Cloud Messaging)
   */
  async send(dto: SendPushDto): Promise<void> {
    // Хэрэглэгчийн device token-ууд авах
    const tokens = await this.prisma.deviceToken.findMany({
      where: { userId: dto.userId, isActive: true },
    });

    if (tokens.length === 0) {
      this.logger.warn(`Хэрэглэгч ${dto.userId}-д device token байхгүй`);
      return;
    }

    // TODO: Firebase Admin SDK интеграци
    // const admin = require('firebase-admin');
    // const message = {
    //   notification: { title: dto.title, body: dto.body },
    //   data: dto.data,
    //   tokens: tokens.map(t => t.token),
    // };
    // const response = await admin.messaging().sendEachForMulticast(message);

    this.logger.log(
      `Push мэдэгдэл илгээгдлээ: ${dto.userId}, ${tokens.length} төхөөрөмж`,
    );
  }

  /**
   * Device token бүртгэх
   */
  async registerToken(userId: string, token: string, platform: string) {
    return this.prisma.deviceToken.upsert({
      where: { token },
      create: { userId, token, platform },
      update: { userId, platform, isActive: true },
    });
  }

  /**
   * Device token устгах
   */
  async removeToken(token: string) {
    return this.prisma.deviceToken.updateMany({
      where: { token },
      data: { isActive: false },
    });
  }
}
