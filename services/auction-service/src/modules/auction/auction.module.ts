import { Module, forwardRef } from '@nestjs/common';
import { AuctionService } from './auction.service';
import { AuctionController } from './auction.controller';
import { AuctionScheduler } from './auction.scheduler';
import { BidModule } from '../bid/bid.module';

@Module({
  imports: [forwardRef(() => BidModule)],
  providers: [AuctionService, AuctionScheduler],
  controllers: [AuctionController],
  exports: [AuctionService],
})
export class AuctionModule {}
