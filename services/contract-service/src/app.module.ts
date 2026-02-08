import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { ContractModule } from './modules/contract/contract.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), PrismaModule, ContractModule],
})
export class AppModule {}
