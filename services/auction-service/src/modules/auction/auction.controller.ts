import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Query,
  Req,
  HttpCode,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth, ApiQuery } from '@nestjs/swagger';
import { AuctionService } from './auction.service';
import { CreateAuctionDto } from './dto/create-auction.dto';
import { JwtAuthGuard, AdminGuard } from '../../guards';

@ApiTags('Auctions')
@Controller('auctions')
export class AuctionController {
  constructor(private readonly auctionService: AuctionService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Дуудлага худалдаа үүсгэх' })
  async create(@Body() dto: CreateAuctionDto, @Req() req: any) {
    const auction = await this.auctionService.create(dto, req.user.id);
    return { success: true, data: auction, message: 'Дуудлага худалдаа үүсгэгдлээ' };
  }

  @Get()
  @ApiOperation({ summary: 'Дуудлага худалдаа хайх' })
  @ApiQuery({ name: 'page', required: false })
  @ApiQuery({ name: 'limit', required: false })
  @ApiQuery({ name: 'status', required: false })
  @ApiQuery({ name: 'type', required: false })
  async search(
    @Query('page') page?: number,
    @Query('limit') limit?: number,
    @Query('status') status?: string,
    @Query('type') type?: string,
  ) {
    const result = await this.auctionService.search(
      page ? Number(page) : 1,
      limit ? Number(limit) : 20,
      status,
      type,
    );
    return { success: true, ...result };
  }

  @Get('my')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Миний дуудлага худалдаанууд' })
  async getMyAuctions(
    @Req() req: any,
    @Query('page') page?: number,
    @Query('limit') limit?: number,
  ) {
    const result = await this.auctionService.getMyAuctions(
      req.user.id,
      page ? Number(page) : 1,
      limit ? Number(limit) : 20,
    );
    return { success: true, ...result };
  }

  @Get(':id')
  @ApiOperation({ summary: 'Дуудлага худалдааны дэлгэрэнгүй' })
  async findById(@Param('id') id: string, @Req() req: any) {
    const auction = await this.auctionService.findById(id);

    // View count нэмэх
    await this.auctionService.incrementViewCount(id);

    return { success: true, data: auction };
  }

  @Post(':id/approve')
  @UseGuards(JwtAuthGuard, AdminGuard)
  @ApiBearerAuth()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Дуудлага худалдаа батлах (Админ)' })
  async approve(@Param('id') id: string) {
    const auction = await this.auctionService.approve(id);
    return { success: true, data: auction, message: 'Дуудлага худалдаа батлагдлаа' };
  }

  @Post(':id/cancel')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Дуудлага худалдаа цуцлах' })
  async cancel(@Param('id') id: string, @Req() req: any) {
    const auction = await this.auctionService.cancel(id, req.user.id);
    return { success: true, data: auction, message: 'Дуудлага худалдаа цуцлагдлаа' };
  }

  @Post(':id/deposit')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Барьцаа төлөх' })
  async payDeposit(@Param('id') id: string, @Req() req: any) {
    const deposit = await this.auctionService.payDeposit(id, req.user.id);
    return { success: true, data: deposit, message: 'Барьцаа төлөгдлөө' };
  }
}
