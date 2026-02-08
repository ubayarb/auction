import {
  Injectable,
  NotFoundException,
  BadRequestException,
  ForbiddenException,
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateContractDto } from './dto/create-contract.dto';

@Injectable()
export class ContractService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateContractDto, creatorId: string) {
    const contractNumber = `CTR-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;

    const contract = await this.prisma.contract.create({
      data: {
        propertyId: dto.propertyId,
        buyerId: dto.buyerId,
        sellerId: dto.sellerId,
        agentId: dto.agentId,
        type: dto.type as any,
        title: dto.title,
        totalAmount: dto.totalAmount,
        currency: dto.currency || 'MNT',
        terms: dto.terms,
        specialConditions: dto.specialConditions,
        startDate: dto.startDate ? new Date(dto.startDate) : null,
        endDate: dto.endDate ? new Date(dto.endDate) : null,
        signingDeadline: dto.signingDeadline ? new Date(dto.signingDeadline) : null,
        monthlyRent: dto.monthlyRent,
        deposit: dto.deposit,
        rentDuration: dto.rentDuration,
        contractNumber,
        status: 'DRAFT',
      },
    });

    // Хувилбар 1 хадгалах
    await this.prisma.contractVersion.create({
      data: {
        contractId: contract.id,
        version: 1,
        content: JSON.stringify(dto),
        changedBy: creatorId,
        changeNote: 'Анхны хувилбар',
      },
    });

    return contract;
  }

  async findById(id: string) {
    const contract = await this.prisma.contract.findUnique({
      where: { id },
      include: {
        versions: { orderBy: { version: 'desc' } },
      },
    });
    if (!contract) throw new NotFoundException('Гэрээ олдсонгүй');
    return contract;
  }

  async signContract(contractId: string, userId: string, role: 'buyer' | 'seller' | 'notary') {
    const contract = await this.prisma.contract.findUnique({ where: { id: contractId } });
    if (!contract) throw new NotFoundException('Гэрээ олдсонгүй');

    const updateData: any = {};
    let newStatus = contract.status;

    switch (role) {
      case 'buyer':
        if (contract.buyerId !== userId) throw new ForbiddenException('Энэ гэрээнд гарын үсэг зурах эрхгүй');
        updateData.buyerSignedAt = new Date();
        if (contract.sellerSignedAt) {
          newStatus = 'BOTH_SIGNED';
        } else {
          newStatus = 'BUYER_SIGNED';
        }
        break;
      case 'seller':
        if (contract.sellerId !== userId) throw new ForbiddenException('Энэ гэрээнд гарын үсэг зурах эрхгүй');
        updateData.sellerSignedAt = new Date();
        if (contract.buyerSignedAt) {
          newStatus = 'BOTH_SIGNED';
        } else {
          newStatus = 'SELLER_SIGNED';
        }
        break;
      case 'notary':
        if (!contract.buyerSignedAt || !contract.sellerSignedAt) {
          throw new BadRequestException('Хоёр тал гарын үсэг зурсны дараа нотариат батлана');
        }
        updateData.notarySignedAt = new Date();
        updateData.notaryId = userId;
        newStatus = 'NOTARIZED';
        break;
    }

    updateData.status = newStatus;

    return this.prisma.contract.update({
      where: { id: contractId },
      data: updateData,
    });
  }

  async getUserContracts(userId: string, page = 1, limit = 20) {
    const skip = (page - 1) * limit;
    const where = {
      OR: [
        { buyerId: userId },
        { sellerId: userId },
        { agentId: userId },
        { notaryId: userId },
      ],
    };

    const [contracts, total] = await Promise.all([
      this.prisma.contract.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
      }),
      this.prisma.contract.count({ where }),
    ]);

    return {
      data: contracts,
      meta: { total, page, limit, totalPages: Math.ceil(total / limit) },
    };
  }

  async cancelContract(contractId: string, userId: string) {
    const contract = await this.prisma.contract.findUnique({ where: { id: contractId } });
    if (!contract) throw new NotFoundException('Гэрээ олдсонгүй');

    if (contract.buyerId !== userId && contract.sellerId !== userId) {
      throw new ForbiddenException('Гэрээ цуцлах эрхгүй');
    }

    if (['NOTARIZED', 'COMPLETED'].includes(contract.status)) {
      throw new BadRequestException('Баталгаажсан гэрээг цуцлах боломжгүй');
    }

    return this.prisma.contract.update({
      where: { id: contractId },
      data: { status: 'CANCELLED' },
    });
  }
}
