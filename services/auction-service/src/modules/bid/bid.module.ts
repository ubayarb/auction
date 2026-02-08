import { Module, forwardRef } from '@nestjs/common';
import { BidService } from './bid.service';
import { BidController } from './bid.controller';
import { BidGateway } from './bid.gateway';
import { AuctionModule } from '../auction/auction.module';

@Module({
  imports: [forwardRef(() => AuctionModule)],
  providers: [BidService, BidGateway],
  controllers: [BidController],
  exports: [BidGateway, BidService],
})
export class BidModule {}
