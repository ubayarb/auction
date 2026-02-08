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
import { ContractService } from './contract.service';
import { CreateContractDto } from './dto/create-contract.dto';

@ApiTags('Contracts')
@ApiBearerAuth()
@Controller('contracts')
export class ContractController {
  constructor(private readonly contractService: ContractService) {}

  @Post()
  @ApiOperation({ summary: 'Гэрээ үүсгэх' })
  async create(@Body() dto: CreateContractDto, @Req() req: any) {
    const contract = await this.contractService.create(dto, req.user?.id);
    return { success: true, data: contract, message: 'Гэрээ амжилттай үүсгэгдлээ' };
  }

  @Get('my')
  @ApiOperation({ summary: 'Миний гэрээнүүд' })
  @ApiQuery({ name: 'page', required: false })
  @ApiQuery({ name: 'limit', required: false })
  async getMyContracts(
    @Req() req: any,
    @Query('page') page?: number,
    @Query('limit') limit?: number,
  ) {
    const result = await this.contractService.getUserContracts(
      req.user?.id,
      page ? Number(page) : 1,
      limit ? Number(limit) : 20,
    );
    return { success: true, ...result };
  }

  @Get(':id')
  @ApiOperation({ summary: 'Гэрээний дэлгэрэнгүй' })
  async findById(@Param('id') id: string) {
    const contract = await this.contractService.findById(id);
    return { success: true, data: contract };
  }

  @Post(':id/sign')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Гэрээнд гарын үсэг зурах' })
  async sign(
    @Param('id') id: string,
    @Body('role') role: 'buyer' | 'seller' | 'notary',
    @Req() req: any,
  ) {
    const contract = await this.contractService.signContract(id, req.user?.id, role);
    return { success: true, data: contract, message: 'Гарын үсэг амжилттай зурагдлаа' };
  }

  @Post(':id/cancel')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Гэрээ цуцлах' })
  async cancel(@Param('id') id: string, @Req() req: any) {
    const contract = await this.contractService.cancelContract(id, req.user?.id);
    return { success: true, data: contract, message: 'Гэрээ цуцлагдлаа' };
  }
}
