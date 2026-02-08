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
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth, ApiQuery } from '@nestjs/swagger';
import { PaymentService } from './payment.service';

@ApiTags('Payments')
@ApiBearerAuth()
@Controller('payments')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post()
  @ApiOperation({ summary: 'Төлбөр үүсгэх' })
  async create(@Body() body: any, @Req() req: any) {
    const payment = await this.paymentService.createPayment({
      ...body,
      payerId: req.user?.id || body.payerId,
    });
    return { success: true, data: payment };
  }

  @Post(':id/process')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Төлбөр боловсруулах' })
  async process(
    @Param('id') id: string,
    @Body('method') method: string,
  ) {
    const payment = await this.paymentService.processPayment(id, method);
    return { success: true, data: payment, message: 'Төлбөр амжилттай' };
  }

  @Get('my')
  @ApiOperation({ summary: 'Миний төлбөрүүд' })
  @ApiQuery({ name: 'page', required: false })
  @ApiQuery({ name: 'limit', required: false })
  async getMyPayments(
    @Req() req: any,
    @Query('page') page?: number,
    @Query('limit') limit?: number,
  ) {
    const result = await this.paymentService.getUserPayments(
      req.user?.id,
      page ? Number(page) : 1,
      limit ? Number(limit) : 20,
    );
    return { success: true, ...result };
  }

  @Get(':id')
  @ApiOperation({ summary: 'Төлбөрийн дэлгэрэнгүй' })
  async findById(@Param('id') id: string) {
    const payment = await this.paymentService.getPaymentById(id);
    return { success: true, data: payment };
  }

  @Post(':id/refund')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Төлбөр буцаах' })
  async refund(
    @Param('id') id: string,
    @Body('reason') reason: string,
  ) {
    const refund = await this.paymentService.refundPayment(id, reason);
    return { success: true, data: refund, message: 'Буцаалт амжилттай' };
  }
}
