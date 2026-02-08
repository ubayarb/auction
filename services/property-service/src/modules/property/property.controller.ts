import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  Query,
  UseGuards,
  HttpCode,
  HttpStatus,
  Req,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth, ApiQuery } from '@nestjs/swagger';
import { PropertyService } from './property.service';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { SearchPropertyDto } from './dto/search-property.dto';

@ApiTags('Properties')
@Controller('properties')
export class PropertyController {
  constructor(private readonly propertyService: PropertyService) {}

  @Post()
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Шинэ зар нэмэх' })
  async create(@Body() dto: CreatePropertyDto, @Req() req: any) {
    const property = await this.propertyService.create(dto, req.user?.id || 'anonymous');
    return { success: true, data: property, message: 'Зар амжилттай үүсгэгдлээ' };
  }

  @Get()
  @ApiOperation({ summary: 'Зар хайх' })
  async search(@Query() dto: SearchPropertyDto) {
    const result = await this.propertyService.search(dto);
    return { success: true, ...result };
  }

  @Get('my')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Миний зарууд' })
  @ApiQuery({ name: 'page', required: false })
  @ApiQuery({ name: 'limit', required: false })
  async getMyProperties(
    @Req() req: any,
    @Query('page') page?: number,
    @Query('limit') limit?: number,
  ) {
    const result = await this.propertyService.getMyProperties(
      req.user?.id,
      page ? Number(page) : 1,
      limit ? Number(limit) : 20,
    );
    return { success: true, ...result };
  }

  @Get(':id')
  @ApiOperation({ summary: 'Зарын дэлгэрэнгүй (ID)' })
  async findById(@Param('id') id: string) {
    const property = await this.propertyService.findById(id);
    return { success: true, data: property };
  }

  @Get('slug/:slug')
  @ApiOperation({ summary: 'Зарын дэлгэрэнгүй (Slug)' })
  async findBySlug(@Param('slug') slug: string) {
    const property = await this.propertyService.findBySlug(slug);
    return { success: true, data: property };
  }

  @Put(':id')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Зар засах' })
  async update(
    @Param('id') id: string,
    @Body() dto: UpdatePropertyDto,
    @Req() req: any,
  ) {
    const property = await this.propertyService.update(id, dto, req.user?.id);
    return { success: true, data: property, message: 'Зар амжилттай шинэчлэгдлээ' };
  }

  @Delete(':id')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Зар устгах' })
  async delete(@Param('id') id: string, @Req() req: any) {
    await this.propertyService.delete(id, req.user?.id);
    return { success: true, message: 'Зар амжилттай устгагдлаа' };
  }

  @Post(':id/publish')
  @ApiBearerAuth()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Зар нийтлэх' })
  async publish(@Param('id') id: string, @Req() req: any) {
    const property = await this.propertyService.publish(id, req.user?.id);
    return { success: true, data: property, message: 'Зар нийтлэхээр илгээгдлээ' };
  }

  @Post(':id/approve')
  @ApiBearerAuth()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Зар баталгаажуулах (Админ)' })
  async approve(@Param('id') id: string, @Req() req: any) {
    const property = await this.propertyService.approve(id, req.user?.id);
    return { success: true, data: property, message: 'Зар баталгаажлаа' };
  }

  @Post(':id/reject')
  @ApiBearerAuth()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Зар татгалзах (Админ)' })
  async reject(
    @Param('id') id: string,
    @Body('reason') reason: string,
  ) {
    const property = await this.propertyService.reject(id, reason);
    return { success: true, data: property, message: 'Зар татгалзагдлаа' };
  }
}
