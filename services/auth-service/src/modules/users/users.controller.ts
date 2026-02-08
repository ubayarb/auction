import {
  Controller,
  Get,
  Put,
  Post,
  Delete,
  Param,
  Body,
  Query,
  UseGuards,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth, ApiQuery } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

@ApiTags('Users')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @Roles('ADMIN')
  @ApiOperation({ summary: 'Бүх хэрэглэгчдийн жагсаалт (Админ)' })
  @ApiQuery({ name: 'page', required: false, type: Number })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  @ApiQuery({ name: 'search', required: false, type: String })
  async findAll(
    @Query('page') page?: number,
    @Query('limit') limit?: number,
    @Query('search') search?: string,
  ) {
    return {
      success: true,
      ...(await this.usersService.findAll(
        page ? Number(page) : 1,
        limit ? Number(limit) : 20,
        search,
      )),
    };
  }

  @Get('profile')
  @ApiOperation({ summary: 'Миний профайл' })
  async getMyProfile(@CurrentUser('id') userId: string) {
    const user = await this.usersService.findById(userId);
    return { success: true, data: user };
  }

  @Get(':id')
  @ApiOperation({ summary: 'Хэрэглэгчийн мэдээлэл' })
  async findById(@Param('id') id: string) {
    const user = await this.usersService.findById(id);
    return { success: true, data: user };
  }

  @Put('profile')
  @ApiOperation({ summary: 'Профайл шинэчлэх' })
  async updateProfile(
    @CurrentUser('id') userId: string,
    @Body() dto: UpdateProfileDto,
  ) {
    const profile = await this.usersService.updateProfile(userId, dto);
    return { success: true, data: profile, message: 'Профайл амжилттай шинэчлэгдлээ' };
  }

  @Post(':id/status')
  @Roles('ADMIN')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Хэрэглэгчийн статус өөрчлөх (Админ)' })
  async updateStatus(
    @Param('id') id: string,
    @Body('status') status: string,
  ) {
    await this.usersService.updateStatus(id, status);
    return { success: true, message: 'Статус амжилттай өөрчлөгдлөө' };
  }

  @Post(':id/roles')
  @Roles('ADMIN')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Хэрэглэгчид роль нэмэх (Админ)' })
  async assignRole(
    @Param('id') id: string,
    @Body('role') role: string,
  ) {
    await this.usersService.assignRole(id, role);
    return { success: true, message: 'Роль амжилттай нэмэгдлээ' };
  }

  @Delete(':id/roles/:role')
  @Roles('ADMIN')
  @ApiOperation({ summary: 'Хэрэглэгчээс роль хасах (Админ)' })
  async removeRole(
    @Param('id') id: string,
    @Param('role') role: string,
  ) {
    await this.usersService.removeRole(id, role);
    return { success: true, message: 'Роль амжилттай хасагдлаа' };
  }

  @Post('kyc/submit')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'KYC баталгаажуулалт илгээх' })
  async submitKyc(
    @CurrentUser('id') userId: string,
    @Body() body: { documentType: string; documentNumber: string; documentFrontUrl: string; documentBackUrl?: string },
  ) {
    const kyc = await this.usersService.submitKyc(
      userId,
      body.documentType,
      body.documentNumber,
      body.documentFrontUrl,
      body.documentBackUrl,
    );
    return { success: true, data: kyc, message: 'KYC амжилттай илгээгдлээ' };
  }

  @Post('kyc/:id/verify')
  @Roles('ADMIN')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'KYC баталгаажуулах (Админ)' })
  async verifyKyc(
    @Param('id') id: string,
    @Body() body: { verified: boolean; rejectionReason?: string },
  ) {
    const kyc = await this.usersService.verifyKyc(id, body.verified, body.rejectionReason);
    return { success: true, data: kyc };
  }
}
