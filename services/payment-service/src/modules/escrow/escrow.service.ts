import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class EscrowService {
  constructor(private readonly prisma: PrismaService) {}

  async createEscrow(data: {
    contractId?: string;
    auctionId?: string;
    buyerId: string;
    sellerId: string;
    totalAmount: number;
    conditions?: { name: string; description?: string }[];
  }) {
    const escrow = await this.prisma.escrowAccount.create({
      data: {
        contractId: data.contractId,
        auctionId: data.auctionId,
        buyerId: data.buyerId,
        sellerId: data.sellerId,
        totalAmount: data.totalAmount,
        status: 'CREATED',
        conditions: {
          create: (data.conditions || []).map((c, i) => ({
            name: c.name,
            description: c.description,
            sortOrder: i,
          })),
        },
      },
      include: { conditions: true },
    });

    return escrow;
  }

  async getEscrowById(id: string) {
    const escrow = await this.prisma.escrowAccount.findUnique({
      where: { id },
      include: {
        conditions: { orderBy: { sortOrder: 'asc' } },
        payments: { orderBy: { createdAt: 'desc' } },
        ledgerEntries: { orderBy: { createdAt: 'desc' } },
      },
    });
    if (!escrow) throw new NotFoundException('Эскро данс олдсонгүй');
    return escrow;
  }

  async fundEscrow(escrowId: string, amount: number) {
    const escrow = await this.prisma.escrowAccount.findUnique({ where: { id: escrowId } });
    if (!escrow) throw new NotFoundException('Эскро данс олдсонгүй');

    const newFunded = Number(escrow.fundedAmount) + amount;
    const isFully = newFunded >= Number(escrow.totalAmount);

    const updated = await this.prisma.escrowAccount.update({
      where: { id: escrowId },
      data: {
        fundedAmount: newFunded,
        status: isFully ? 'FUNDED' : 'PARTIALLY_FUNDED',
        fundedAt: isFully ? new Date() : undefined,
      },
    });

    await this.prisma.ledgerEntry.create({
      data: {
        escrowId,
        type: 'CREDIT',
        amount,
        balance: newFunded,
        description: `Эскро санхүүжилт: ${amount.toLocaleString()}₮`,
      },
    });

    return updated;
  }

  async meetCondition(escrowId: string, conditionId: string, userId: string) {
    const condition = await this.prisma.releaseCondition.findUnique({
      where: { id: conditionId },
    });
    if (!condition) throw new NotFoundException('Нөхцөл олдсонгүй');
    if (condition.escrowId !== escrowId) throw new BadRequestException('Нөхцөл тохирохгүй');

    return this.prisma.releaseCondition.update({
      where: { id: conditionId },
      data: { isMet: true, metAt: new Date(), metBy: userId },
    });
  }

  async releaseEscrow(escrowId: string) {
    const escrow = await this.prisma.escrowAccount.findUnique({
      where: { id: escrowId },
      include: { conditions: true },
    });

    if (!escrow) throw new NotFoundException('Эскро данс олдсонгүй');
    if (escrow.status !== 'FUNDED') {
      throw new BadRequestException('Эскро бүрэн санхүүжигдээгүй байна');
    }

    // Бүх нөхцөл биелсэн эсэх
    const unmetConditions = escrow.conditions.filter((c: { isMet: boolean }) => !c.isMet);
    if (unmetConditions.length > 0) {
      throw new BadRequestException(
        `${unmetConditions.length} нөхцөл биелээгүй байна: ${unmetConditions.map((c: { name: string }) => c.name).join(', ')}`,
      );
    }

    // Шимтгэл тооцох (2.5%)
    const fee = Number(escrow.totalAmount) * 0.025;
    const releaseAmount = Number(escrow.totalAmount) - fee;

    const updated = await this.prisma.escrowAccount.update({
      where: { id: escrowId },
      data: {
        status: 'RELEASED',
        releasedAmount: releaseAmount,
        releasedAt: new Date(),
      },
    });

    // Ledger entries
    await this.prisma.ledgerEntry.createMany({
      data: [
        {
          escrowId,
          type: 'FEE',
          amount: fee,
          balance: Number(escrow.fundedAmount) - fee,
          description: `Платформ шимтгэл: ${fee.toLocaleString()}₮`,
        },
        {
          escrowId,
          type: 'DEBIT',
          amount: releaseAmount,
          balance: 0,
          description: `Худалдагчид шилжүүлсэн: ${releaseAmount.toLocaleString()}₮`,
        },
      ],
    });

    return updated;
  }

  async disputeEscrow(escrowId: string, reason: string) {
    return this.prisma.escrowAccount.update({
      where: { id: escrowId },
      data: { status: 'DISPUTED', disputedAt: new Date() },
    });
  }

  async getUserEscrows(userId: string) {
    return this.prisma.escrowAccount.findMany({
      where: {
        OR: [{ buyerId: userId }, { sellerId: userId }],
      },
      include: { conditions: true, _count: { select: { payments: true } } },
      orderBy: { createdAt: 'desc' },
    });
  }
}
