import {
  Controller,
  Get,
  Post,
  Patch,
  Body,
  Param,
  Query,
  Headers,
} from '@nestjs/common';
import { NotificationService } from './notification.service';

@Controller('notifications')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  /**
   * Мэдэгдэл илгээх (дотоод API)
   */
  @Post('send')
  async send(@Body() dto: any) {
    return {
      success: true,
      data: await this.notificationService.send(dto),
    };
  }

  /**
   * Миний мэдэгдлүүд
   */
  @Get()
  async getMyNotifications(
    @Headers('x-user-id') userId: string,
    @Query('page') page?: string,
    @Query('limit') limit?: string,
    @Query('unreadOnly') unreadOnly?: string,
  ) {
    const result = await this.notificationService.getUserNotifications(
      userId,
      Number(page) || 1,
      Number(limit) || 20,
      unreadOnly === 'true',
    );
    return { success: true, ...result };
  }

  /**
   * Уншаагүй тоо
   */
  @Get('unread-count')
  async getUnreadCount(@Headers('x-user-id') userId: string) {
    const count = await this.notificationService.getUnreadCount(userId);
    return { success: true, data: { count } };
  }

  /**
   * Уншсан гэж тэмдэглэх
   */
  @Patch(':id/read')
  async markAsRead(
    @Param('id') id: string,
    @Headers('x-user-id') userId: string,
  ) {
    return {
      success: true,
      data: await this.notificationService.markAsRead(id, userId),
    };
  }

  /**
   * Бүгдийг уншсан болгох
   */
  @Post('mark-all-read')
  async markAllAsRead(@Headers('x-user-id') userId: string) {
    return {
      success: true,
      data: await this.notificationService.markAllAsRead(userId),
    };
  }

  /**
   * Тохиргоо авах
   */
  @Get('settings')
  async getSettings(@Headers('x-user-id') userId: string) {
    return {
      success: true,
      data: await this.notificationService.getSettings(userId),
    };
  }

  /**
   * Тохиргоо шинэчлэх
   */
  @Patch('settings')
  async updateSettings(
    @Headers('x-user-id') userId: string,
    @Body() data: any,
  ) {
    return {
      success: true,
      data: await this.notificationService.updateSettings(userId, data),
    };
  }
}
