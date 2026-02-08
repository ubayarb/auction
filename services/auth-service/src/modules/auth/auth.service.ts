import {
  Injectable,
  UnauthorizedException,
  ConflictException,
  BadRequestException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import * as bcrypt from 'bcryptjs';
import { PrismaService } from '../../prisma/prisma.service';
import { UsersService } from '../users/users.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    private readonly config: ConfigService,
  ) {}

  async register(dto: RegisterDto) {
    // Check if email exists
    const existingUser = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });
    if (existingUser) {
      throw new ConflictException('Энэ имэйл хаяг бүртгэгдсэн байна');
    }

    // Check phone
    if (dto.phone) {
      const existingPhone = await this.prisma.user.findUnique({
        where: { phone: dto.phone },
      });
      if (existingPhone) {
        throw new ConflictException('Энэ утасны дугаар бүртгэгдсэн байна');
      }
    }

    // Hash password
    const rounds = this.config.get<number>('BCRYPT_ROUNDS', 12);
    const passwordHash = await bcrypt.hash(dto.password, rounds);

    // Create user with profile
    const user = await this.prisma.user.create({
      data: {
        email: dto.email,
        phone: dto.phone,
        passwordHash,
        status: 'active', // For MVP; change to 'pending' for email verification
        emailVerified: false,
        profile: {
          create: {
            firstName: dto.firstName,
            lastName: dto.lastName,
            displayName: `${dto.firstName} ${dto.lastName.charAt(0)}.`,
          },
        },
      },
      include: { profile: true },
    });

    // Assign default role
    const roleName = dto.role || 'buyer';
    const role = await this.prisma.role.findUnique({
      where: { name: roleName },
    });
    if (role) {
      await this.prisma.userRole.create({
        data: { userId: user.id, roleId: role.id },
      });
    }

    // Generate tokens
    const tokens = await this.generateTokens(user.id, user.email);

    // Audit log
    await this.logAudit(user.id, 'user.register', 'user', user.id);

    return {
      user: this.sanitizeUser(user),
      ...tokens,
    };
  }

  async login(dto: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email },
      include: {
        profile: true,
        userRoles: { include: { role: true } },
      },
    });

    if (!user) {
      throw new UnauthorizedException('Имэйл эсвэл нууц үг буруу байна');
    }

    // Check if locked
    if (user.lockedUntil && user.lockedUntil > new Date()) {
      throw new UnauthorizedException(
        'Данс түр хугацаагаар түгжигдсэн байна. Дараа дахин оролдоно уу.',
      );
    }

    // Check if banned/suspended
    if (user.status === 'banned' || user.status === 'suspended') {
      throw new UnauthorizedException('Данс идэвхгүй байна');
    }

    // Verify password
    const isValid = await bcrypt.compare(dto.password, user.passwordHash);
    if (!isValid) {
      // Increment failed count
      await this.prisma.user.update({
        where: { id: user.id },
        data: {
          failedLoginCount: { increment: 1 },
          ...(user.failedLoginCount >= 4 && {
            lockedUntil: new Date(Date.now() + 15 * 60 * 1000), // 15 min lock
          }),
        },
      });
      throw new UnauthorizedException('Имэйл эсвэл нууц үг буруу байна');
    }

    // Reset failed count & update last login
    await this.prisma.user.update({
      where: { id: user.id },
      data: {
        failedLoginCount: 0,
        lockedUntil: null,
        lastLoginAt: new Date(),
        loginCount: { increment: 1 },
      },
    });

    // Generate tokens
    const tokens = await this.generateTokens(user.id, user.email);

    // Store refresh token
    const refreshHash = await bcrypt.hash(tokens.refreshToken, 10);
    await this.prisma.refreshToken.create({
      data: {
        userId: user.id,
        tokenHash: refreshHash,
        deviceInfo: dto.deviceInfo || {},
        expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
      },
    });

    // Audit log
    await this.logAudit(user.id, 'user.login', 'user', user.id);

    return {
      user: this.sanitizeUser(user),
      ...tokens,
    };
  }

  async refreshTokens(refreshToken: string) {
    try {
      const payload = this.jwtService.verify(refreshToken, {
        secret: this.config.get<string>('JWT_SECRET'),
      });

      const user = await this.prisma.user.findUnique({
        where: { id: payload.sub },
        include: {
          profile: true,
          userRoles: { include: { role: true } },
        },
      });

      if (user?.status !== 'active') {
        throw new UnauthorizedException();
      }

      const tokens = await this.generateTokens(user.id, user.email);
      return { user: this.sanitizeUser(user), ...tokens };
    } catch {
      throw new UnauthorizedException('Refresh token хүчингүй байна');
    }
  }

  async logout(userId: string) {
    // Revoke all refresh tokens
    await this.prisma.refreshToken.updateMany({
      where: { userId, revokedAt: null },
      data: { revokedAt: new Date() },
    });

    await this.logAudit(userId, 'user.logout', 'user', userId);
  }

  async changePassword(userId: string, oldPassword: string, newPassword: string) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new BadRequestException('Хэрэглэгч олдсонгүй');

    const isValid = await bcrypt.compare(oldPassword, user.passwordHash);
    if (!isValid) throw new BadRequestException('Хуучин нууц үг буруу байна');

    const rounds = this.config.get<number>('BCRYPT_ROUNDS', 12);
    const passwordHash = await bcrypt.hash(newPassword, rounds);

    await this.prisma.user.update({
      where: { id: userId },
      data: { passwordHash },
    });

    // Revoke all refresh tokens
    await this.prisma.refreshToken.updateMany({
      where: { userId, revokedAt: null },
      data: { revokedAt: new Date() },
    });

    await this.logAudit(userId, 'user.password_changed', 'user', userId);
  }

  // ─────────────────────────────────────
  // Private helpers
  // ─────────────────────────────────────

  private async generateTokens(userId: string, email: string) {
    const payload = { sub: userId, email };

    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(payload),
      this.jwtService.signAsync(payload, {
        expiresIn: this.config.get<string>('JWT_REFRESH_EXPIRY', '30d') as any,
      }),
    ]);

    return {
      accessToken,
      refreshToken,
      expiresIn: 3600,
    };
  }

  private sanitizeUser(user: any) {
    const { passwordHash, deletedAt, ...sanitized } = user;
    return {
      ...sanitized,
      roles: user.userRoles?.map((ur: any) => ur.role.name) || [],
    };
  }

  private async logAudit(
    userId: string,
    action: string,
    resourceType: string,
    resourceId: string,
  ) {
    await this.prisma.auditLog.create({
      data: { userId, action, resourceType, resourceId },
    });
  }
}
