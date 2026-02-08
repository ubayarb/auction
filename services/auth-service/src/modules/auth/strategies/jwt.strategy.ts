import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../../../prisma/prisma.service';

export interface JwtPayload {
  sub: string;
  email: string;
  roles: string[];
  iat?: number;
  exp?: number;
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    configService: ConfigService,
    private readonly prisma: PrismaService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('JWT_SECRET') || 'default-secret',
    });
  }

  async validate(payload: JwtPayload) {
    const user = await this.prisma.user.findUnique({
      where: { id: payload.sub },
      include: {
        profile: true,
        userRoles: {
          include: { role: true },
        },
      },
    });

    if (user?.status !== 'ACTIVE') {
      throw new UnauthorizedException('Хэрэглэгч олдсонгүй эсвэл идэвхгүй байна');
    }

    return {
      id: user.id,
      email: user.email,
      phone: user.phone,
      roles: user.userRoles.map((ur: { role: { name: string } }) => ur.role.name),
      profile: user.profile,
    };
  }
}
