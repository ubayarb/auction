import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class InquiryService {
  constructor(private readonly prisma: PrismaService) {}

  async create(userId: string, propertyId: string, message: string, phone?: string, email?: string) {
    const property = await this.prisma.property.findUnique({ where: { id: propertyId } });
    if (!property) {
      throw new NotFoundException('Зар олдсонгүй');
    }

    const inquiry = await this.prisma.inquiry.create({
      data: { userId, propertyId, message, phone, email },
    });

    await this.prisma.property.update({
      where: { id: propertyId },
      data: { inquiryCount: { increment: 1 } },
    });

    return inquiry;
  }

  async getPropertyInquiries(propertyId: string, page = 1, limit = 20) {
    const skip = (page - 1) * limit;

    const [inquiries, total] = await Promise.all([
      this.prisma.inquiry.findMany({
        where: { propertyId },
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
      }),
      this.prisma.inquiry.count({ where: { propertyId } }),
    ]);

    return {
      data: inquiries,
      meta: { total, page, limit, totalPages: Math.ceil(total / limit) },
    };
  }

  async getMyInquiries(userId: string, page = 1, limit = 20) {
    const skip = (page - 1) * limit;

    const [inquiries, total] = await Promise.all([
      this.prisma.inquiry.findMany({
        where: { userId },
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
        include: { property: { include: { media: { where: { isPrimary: true }, take: 1 } } } },
      }),
      this.prisma.inquiry.count({ where: { userId } }),
    ]);

    return {
      data: inquiries,
      meta: { total, page, limit, totalPages: Math.ceil(total / limit) },
    };
  }

  async reply(inquiryId: string) {
    return this.prisma.inquiry.update({
      where: { id: inquiryId },
      data: { status: 'REPLIED', repliedAt: new Date() },
    });
  }
}
