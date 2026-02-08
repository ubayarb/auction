import {
  Controller,
  Post,
  Delete,
  Get,
  Param,
  Query,
  Req,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth, ApiQuery } from '@nestjs/swagger';
import { FavoriteService } from './favorite.service';

@ApiTags('Favorites')
@ApiBearerAuth()
@Controller('favorites')
export class FavoriteController {
  constructor(private readonly favoriteService: FavoriteService) {}

  @Get()
  @ApiOperation({ summary: 'Хадгалсан зарууд' })
  @ApiQuery({ name: 'page', required: false })
  @ApiQuery({ name: 'limit', required: false })
  async getUserFavorites(
    @Req() req: any,
    @Query('page') page?: number,
    @Query('limit') limit?: number,
  ) {
    const result = await this.favoriteService.getUserFavorites(
      req.user?.id,
      page ? Number(page) : 1,
      limit ? Number(limit) : 20,
    );
    return { success: true, ...result };
  }

  @Post(':propertyId')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Зар хадгалах' })
  async addFavorite(
    @Param('propertyId') propertyId: string,
    @Req() req: any,
  ) {
    await this.favoriteService.addFavorite(req.user?.id, propertyId);
    return { success: true, message: 'Зар хадгалагдлаа' };
  }

  @Delete(':propertyId')
  @ApiOperation({ summary: 'Хадгалсан зар хасах' })
  async removeFavorite(
    @Param('propertyId') propertyId: string,
    @Req() req: any,
  ) {
    await this.favoriteService.removeFavorite(req.user?.id, propertyId);
    return { success: true, message: 'Хадгалсан зар хасагдлаа' };
  }

  @Get(':propertyId/check')
  @ApiOperation({ summary: 'Хадгалагдсан эсэх шалгах' })
  async isFavorited(
    @Param('propertyId') propertyId: string,
    @Req() req: any,
  ) {
    const result = await this.favoriteService.isFavorited(req.user?.id, propertyId);
    return { success: true, data: result };
  }
}
