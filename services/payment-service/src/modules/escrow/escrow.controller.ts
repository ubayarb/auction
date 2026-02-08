import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Req,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { EscrowService } from './escrow.service';

@ApiTags('Escrow')
@ApiBearerAuth()
@Controller('escrow')
export class EscrowController {
  constructor(private readonly escrowService: EscrowService) {}

  @Post()
  @ApiOperation({ summary: 'Эскро данс үүсгэх' })
  async create(@Body() body: any) {
    const escrow = await this.escrowService.createEscrow(body);
    return { success: true, data: escrow };
  }

  @Get('my')
  @ApiOperation({ summary: 'Миний эскро дансууд' })
  async getMyEscrows(@Req() req: any) {
    const escrows = await this.escrowService.getUserEscrows(req.user?.id);
    return { success: true, data: escrows };
  }

  @Get(':id')
  @ApiOperation({ summary: 'Эскро дансны дэлгэрэнгүй' })
  async findById(@Param('id') id: string) {
    const escrow = await this.escrowService.getEscrowById(id);
    return { success: true, data: escrow };
  }

  @Post(':id/fund')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Эскро санхүүжүүлэх' })
  async fund(@Param('id') id: string, @Body('amount') amount: number) {
    const escrow = await this.escrowService.fundEscrow(id, amount);
    return { success: true, data: escrow, message: 'Эскро санхүүжилт амжилттай' };
  }

  @Post(':id/conditions/:conditionId/meet')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Нөхцөл биелүүлэх' })
  async meetCondition(
    @Param('id') id: string,
    @Param('conditionId') conditionId: string,
    @Req() req: any,
  ) {
    const condition = await this.escrowService.meetCondition(id, conditionId, req.user?.id);
    return { success: true, data: condition };
  }

  @Post(':id/release')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Эскро чөлөөлөх' })
  async release(@Param('id') id: string) {
    const escrow = await this.escrowService.releaseEscrow(id);
    return { success: true, data: escrow, message: 'Эскро чөлөөлөгдлөө' };
  }

  @Post(':id/dispute')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Маргаан илгээх' })
  async dispute(@Param('id') id: string, @Body('reason') reason: string) {
    const escrow = await this.escrowService.disputeEscrow(id, reason);
    return { success: true, data: escrow, message: 'Маргаан бүртгэгдлээ' };
  }
}
