import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async findById(id: string) {
    const user = await this.prisma.user.findUnique({
      where: { id },
      include: {
        profile: true,
        userRoles: {
          include: { role: true },
        },
      },
    });

    if (!user) {
      throw new NotFoundException('Хэрэглэгч олдсонгүй');
    }

    const { passwordHash, ...result } = user;
    return result;
  }

  async findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
      include: {
        profile: true,
        userRoles: {
          include: { role: true },
        },
      },
    });
  }

  async findAll(page = 1, limit = 20, search?: string) {
    const skip = (page - 1) * limit;

    const where: any = {};
    if (search) {
      where.OR = [
        { email: { contains: search, mode: 'insensitive' } },
        { phone: { contains: search } },
        { profile: { firstName: { contains: search, mode: 'insensitive' } } },
        { profile: { lastName: { contains: search, mode: 'insensitive' } } },
      ];
    }

    const [users, total] = await Promise.all([
      this.prisma.user.findMany({
        where,
        skip,
        take: limit,
        include: {
          profile: true,
          userRoles: { include: { role: true } },
        },
        orderBy: { createdAt: 'desc' },
      }),
      this.prisma.user.count({ where }),
    ]);

    return {
      data: users.map(({ passwordHash: _pw, ...user }) => user),
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async updateProfile(userId: string, dto: UpdateProfileDto) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      throw new NotFoundException('Хэрэглэгч олдсонгүй');
    }

    const profile = await this.prisma.userProfile.upsert({
      where: { userId },
      update: {
        firstName: dto.firstName,
        lastName: dto.lastName,
        avatarUrl: dto.avatar,
        dateOfBirth: dto.dateOfBirth ? new Date(dto.dateOfBirth) : undefined,
        address: dto.address,
        city: dto.city,
        district: dto.district,
        bio: dto.bio,
        companyName: dto.companyName,
        companyRegister: dto.companyRegister,
        licenseNumber: dto.licenseNumber,
      },
      create: {
        userId,
        firstName: dto.firstName || '',
        lastName: dto.lastName || '',
        avatarUrl: dto.avatar,
        dateOfBirth: dto.dateOfBirth ? new Date(dto.dateOfBirth) : undefined,
        address: dto.address,
        city: dto.city,
        district: dto.district,
        bio: dto.bio,
        companyName: dto.companyName,
        companyRegister: dto.companyRegister,
        licenseNumber: dto.licenseNumber,
      },
    });

    return profile;
  }

  async updateStatus(userId: string, status: string) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      throw new NotFoundException('Хэрэглэгч олдсонгүй');
    }

    return this.prisma.user.update({
      where: { id: userId },
      data: { status: status as any },
    });
  }

  async assignRole(userId: string, roleName: string) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      throw new NotFoundException('Хэрэглэгч олдсонгүй');
    }

    const role = await this.prisma.role.findUnique({ where: { name: roleName } });
    if (!role) {
      throw new BadRequestException(`'${roleName}' нэртэй роль олдсонгүй`);
    }

    const existing = await this.prisma.userRole.findUnique({
      where: {
        userId_roleId: { userId, roleId: role.id },
      },
    });

    if (existing) {
      throw new BadRequestException('Хэрэглэгч энэ ролийг аль хэдийн эзэмшсэн байна');
    }

    return this.prisma.userRole.create({
      data: { userId, roleId: role.id },
    });
  }

  async removeRole(userId: string, roleName: string) {
    const role = await this.prisma.role.findUnique({ where: { name: roleName } });
    if (!role) {
      throw new BadRequestException(`'${roleName}' нэртэй роль олдсонгүй`);
    }

    return this.prisma.userRole.deleteMany({
      where: { userId, roleId: role.id },
    });
  }

  async submitKyc(userId: string, documentType: string, documentNumber: string, documentFrontUrl: string, documentBackUrl?: string) {
    return this.prisma.kycVerification.create({
      data: {
        userId,
        verificationType: 'DOCUMENT',
        documentType,
        documentNumber,
        documentFrontUrl,
        documentBackUrl,
        status: 'PENDING',
      },
    });
  }

  async verifyKyc(kycId: string, verified: boolean, rejectionReason?: string) {
    const kyc = await this.prisma.kycVerification.findUnique({ where: { id: kycId } });
    if (!kyc) {
      throw new NotFoundException('KYC мэдээлэл олдсонгүй');
    }

    const updatedKyc = await this.prisma.kycVerification.update({
      where: { id: kycId },
      data: {
        status: verified ? 'VERIFIED' : 'REJECTED',
        reviewedAt: verified ? new Date() : null,
        rejectionReason: rejectionReason || null,
      },
    });

    if (verified) {
      await this.prisma.user.update({
        where: { id: kyc.userId },
        data: { kycStatus: 'VERIFIED' },
      });
    }

    return updatedKyc;
  }
}
