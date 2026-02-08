import {
  Controller,
  Post,
  Get,
  Param,
  Body,
  Query,
  Req,
  HttpCode,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth, ApiQuery } from '@nestjs/swagger';
import { BidService } from './bid.service';
import { PlaceBidDto } from './dto/place-bid.dto';
import { JwtAuthGuard } from '../../guards';

@ApiTags('Bids')
@Controller()
export class BidController {
  constructor(private readonly bidService: BidService) {}

  @Post('auctions/:auctionId/bids')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Үнийн санал тавих (Redis lock + DB Transaction)' })
  async placeBid(
    @Param('auctionId') auctionId: string,
    @Body() dto: PlaceBidDto,
    @Req() req: any,
  ) {
    const result = await this.bidService.placeBid(
      auctionId,
      req.user.id,
      dto.amount,
      {
        isAutoBid: dto.isAutoBid,
        maxAmount: dto.maxAmount,
        ipAddress: req.ip,
        userAgent: req.headers['user-agent'],
      },
    );

    // Auto-bid trigger хийх (async)
    if (result.autoBidTriggered && result.previousBidder) {
      setImmediate(async () => {
        await this.bidService.processAutoBid(
          auctionId,
          result.previousBidder!,
          Number(result.bid.amount),
        );
      });
    }

    return { success: true, data: result, message: 'Санал амжилттай тавигдлаа' };
  }

  @Post('auctions/:auctionId/buy-now')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Шууд худалдан авах (Buy Now)' })
  async buyNow(
    @Param('auctionId') auctionId: string,
    @Req() req: any,
  ) {
    const result = await this.bidService.buyNow(auctionId, req.user.id, {
      ipAddress: req.ip,
      userAgent: req.headers['user-agent'],
    });
    return { success: true, data: result, message: 'Амжилттай худалдан авлаа' };
  }

  @Get('auctions/:auctionId/bids')
  @ApiOperation({ summary: 'Үнийн саналын түүх' })
  @ApiQuery({ name: 'page', required: false })
  @ApiQuery({ name: 'limit', required: false })
  async getBidHistory(
    @Param('auctionId') auctionId: string,
    @Query('page') page?: number,
    @Query('limit') limit?: number,
  ) {
    const result = await this.bidService.getBidHistory(
      auctionId,
      page ? Number(page) : 1,
      limit ? Number(limit) : 50,
    );
    return { success: true, ...result };
  }

  @Get('auctions/:auctionId/leaderboard')
  @ApiOperation({ summary: 'Тэргүүлэгчдийн самбар' })
  async getLeaderboard(
    @Param('auctionId') auctionId: string,
    @Query('top') top?: number,
  ) {
    const leaderboard = await this.bidService.getLeaderboard(
      auctionId,
      top ? Number(top) : 10,
    );
    return { success: true, data: leaderboard };
  }

  @Get('bids/my')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Миний саналууд' })
  @ApiQuery({ name: 'page', required: false })
  @ApiQuery({ name: 'limit', required: false })
  async getMyBids(
    @Req() req: any,
    @Query('page') page?: number,
    @Query('limit') limit?: number,
  ) {
    const result = await this.bidService.getMyBids(
      req.user.id,
      page ? Number(page) : 1,
      limit ? Number(limit) : 20,
    );
    return { success: true, ...result };
  }
}
