/// <reference types="multer" />
import {
  Controller,
  Post,
  Delete,
  Put,
  Param,
  Body,
  UseInterceptors,
  UploadedFile,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth, ApiConsumes } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { MediaService } from './media.service';

@ApiTags('Property Media')
@ApiBearerAuth()
@Controller('properties/:propertyId/media')
export class MediaController {
  constructor(private readonly mediaService: MediaService) {}

  @Post()
  @ApiOperation({ summary: 'Зураг/видео байршуулах' })
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('file'))
  async upload(
    @Param('propertyId') propertyId: string,
    @UploadedFile() file: Express.Multer.File,
    @Body() body: { type?: string; title?: string; isPrimary?: string },
  ) {
    const media = await this.mediaService.uploadMedia(propertyId, file, {
      type: body.type,
      title: body.title,
      isPrimary: body.isPrimary === 'true',
    });
    return { success: true, data: media };
  }

  @Delete(':mediaId')
  @ApiOperation({ summary: 'Медиа устгах' })
  async delete(@Param('mediaId') mediaId: string) {
    await this.mediaService.deleteMedia(mediaId);
    return { success: true, message: 'Медиа устгагдлаа' };
  }

  @Put('reorder')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Медиа дараалал өөрчлөх' })
  async reorder(
    @Param('propertyId') propertyId: string,
    @Body('mediaIds') mediaIds: string[],
  ) {
    await this.mediaService.reorderMedia(propertyId, mediaIds);
    return { success: true, message: 'Дараалал шинэчлэгдлээ' };
  }

  @Put(':mediaId/primary')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Үндсэн зураг тохируулах' })
  async setPrimary(
    @Param('propertyId') propertyId: string,
    @Param('mediaId') mediaId: string,
  ) {
    await this.mediaService.setPrimary(propertyId, mediaId);
    return { success: true, message: 'Үндсэн зураг тохируулагдлаа' };
  }
}
