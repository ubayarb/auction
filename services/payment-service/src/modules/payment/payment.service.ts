import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class PaymentService {
  constructor(private readonly prisma: PrismaService) {}

  async createPayment(data: {
    contractId?: string;
    auctionId?: string;
    payerId: string;
    payeeId: string;
    escrowId?: string;
    type: string;
    method?: string;
    amount: number;
    description?: string;
  }) {
    // Шимтгэл тооцох (2.5%)
    const feeRate = 0.025;
    const fee = data.amount * feeRate;
    const netAmount = data.amount - fee;

    const payment = await this.prisma.payment.create({
      data: {
        contractId: data.contractId,
        auctionId: data.auctionId,
        payerId: data.payerId,
        payeeId: data.payeeId,
        escrowId: data.escrowId,
        type: data.type as any,
        method: data.method as any,
        amount: data.amount,
        fee,
        netAmount,
        description: data.description,
        reference: `PAY-${Date.now()}-${uuidv4().slice(0, 8).toUpperCase()}`,
        status: 'PENDING',
      },
    });

    return payment;
  }

  async processPayment(paymentId: string, method: string) {
    const payment = await this.prisma.payment.findUnique({ where: { id: paymentId } });
    if (!payment) throw new NotFoundException('Төлбөр олдсонгүй');
    if (payment.status !== 'PENDING') {
      throw new BadRequestException('Төлбөр аль хэдийн боловсруулагдсан');
    }

    // Simulate payment processing (integrate with QPay/SocialPay/etc.)
    try {
      const updated = await this.prisma.payment.update({
        where: { id: paymentId },
        data: {
          status: 'COMPLETED',
          method: method as any,
          paidAt: new Date(),
        },
      });

      // Эскрод нэмэх
      if (updated.escrowId) {
        await this.prisma.escrowAccount.update({
          where: { id: updated.escrowId },
          data: {
            fundedAmount: { increment: Number(updated.amount) },
          },
        });

        await this.prisma.ledgerEntry.create({
          data: {
            escrowId: updated.escrowId,
            type: 'CREDIT',
            amount: updated.amount,
            balance: 0, // Will be recalculated
            description: `Төлбөр хүлээн авлаа: ${updated.reference}`,
            reference: updated.reference,
          },
        });
      }

      return updated;
    } catch (error) {
      await this.prisma.payment.update({
        where: { id: paymentId },
        data: {
          status: 'FAILED',
          failedAt: new Date(),
          failureReason: error instanceof Error ? error.message : 'Unknown error',
        },
      });
      throw error;
    }
  }

  async getPaymentById(id: string) {
    const payment = await this.prisma.payment.findUnique({ where: { id } });
    if (!payment) throw new NotFoundException('Төлбөр олдсонгүй');
    return payment;
  }

  async getUserPayments(userId: string, page = 1, limit = 20) {
    const skip = (page - 1) * limit;
    const [payments, total] = await Promise.all([
      this.prisma.payment.findMany({
        where: { OR: [{ payerId: userId }, { payeeId: userId }] },
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
      }),
      this.prisma.payment.count({
        where: { OR: [{ payerId: userId }, { payeeId: userId }] },
      }),
    ]);

    return {
      data: payments,
      meta: { total, page, limit, totalPages: Math.ceil(total / limit) },
    };
  }

  async refundPayment(paymentId: string, reason: string) {
    const payment = await this.prisma.payment.findUnique({ where: { id: paymentId } });
    if (!payment) throw new NotFoundException('Төлбөр олдсонгүй');
    if (payment.status !== 'COMPLETED') {
      throw new BadRequestException('Зөвхөн амжилттай болсон төлбөрийг буцаах боломжтой');
    }

    // Буцаалт
    const refund = await this.prisma.payment.create({
      data: {
        payerId: payment.payeeId,
        payeeId: payment.payerId,
        type: 'REFUND',
        amount: payment.amount,
        currency: payment.currency,
        fee: 0,
        netAmount: payment.amount,
        description: `Буцаалт: ${reason}`,
        reference: `REF-${Date.now()}-${paymentId.slice(0, 8)}`,
        status: 'COMPLETED',
        paidAt: new Date(),
      },
    });

    await this.prisma.payment.update({
      where: { id: paymentId },
      data: { status: 'REFUNDED' },
    });

    return refund;
  }
}
