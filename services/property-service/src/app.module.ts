import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';
import { PrismaModule } from './prisma/prisma.module';
import { PropertyModule } from './modules/property/property.module';
import { MediaModule } from './modules/media/media.module';
import { FavoriteModule } from './modules/favorite/favorite.module';
import { InquiryModule } from './modules/inquiry/inquiry.module';
import { HealthModule } from './modules/health/health.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ThrottlerModule.forRoot([
      { name: 'short', ttl: 1000, limit: 20 },
      { name: 'long', ttl: 60000, limit: 200 },
    ]),
    PrismaModule,
    PropertyModule,
    MediaModule,
    FavoriteModule,
    InquiryModule,
    HealthModule,
  ],
})
export class AppModule {}
