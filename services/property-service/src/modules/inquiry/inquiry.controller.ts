import {
  Controller,
  Post,
  Get,
  Put,
  Param,
  Body,
  Query,
  Req,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth, ApiQuery } from '@nestjs/swagger';
import { InquiryService } from './inquiry.service';

@ApiTags('Inquiries')
@ApiBearerAuth()
@Controller()
export class InquiryController {
  constructor(private readonly inquiryService: InquiryService) {}

  @Post('properties/:propertyId/inquiries')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Лавлага илгээх' })
  async create(
    @Param('propertyId') propertyId: string,
    @Body() body: { message: string; phone?: string; email?: string },
    @Req() req: any,
  ) {
    const inquiry = await this.inquiryService.create(
      req.user?.id,
      propertyId,
      body.message,
      body.phone,
      body.email,
    );
    return { success: true, data: inquiry, message: 'Лавлага илгээгдлээ' };
  }

  @Get('properties/:propertyId/inquiries')
  @ApiOperation({ summary: 'Зарын лавлагаанууд' })
  @ApiQuery({ name: 'page', required: false })
  @ApiQuery({ name: 'limit', required: false })
  async getPropertyInquiries(
    @Param('propertyId') propertyId: string,
    @Query('page') page?: number,
    @Query('limit') limit?: number,
  ) {
    const result = await this.inquiryService.getPropertyInquiries(
      propertyId,
      page ? Number(page) : 1,
      limit ? Number(limit) : 20,
    );
    return { success: true, ...result };
  }

  @Get('inquiries/my')
  @ApiOperation({ summary: 'Миний лавлагаанууд' })
  @ApiQuery({ name: 'page', required: false })
  @ApiQuery({ name: 'limit', required: false })
  async getMyInquiries(
    @Req() req: any,
    @Query('page') page?: number,
    @Query('limit') limit?: number,
  ) {
    const result = await this.inquiryService.getMyInquiries(
      req.user?.id,
      page ? Number(page) : 1,
      limit ? Number(limit) : 20,
    );
    return { success: true, ...result };
  }

  @Put('inquiries/:id/reply')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Лавлагад хариулсан' })
  async reply(@Param('id') id: string) {
    await this.inquiryService.reply(id);
    return { success: true, message: 'Хариулсан гэж тэмдэглэгдлээ' };
  }
}
