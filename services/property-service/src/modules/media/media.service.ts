/// <reference types="multer" />
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { ConfigService } from '@nestjs/config';
import * as Minio from 'minio';

@Injectable()
export class MediaService {
  private readonly minioClient: Minio.Client;
  private readonly bucketName: string;

  constructor(
    private readonly prisma: PrismaService,
    private readonly config: ConfigService,
  ) {
    this.minioClient = new Minio.Client({
      endPoint: this.config.get('S3_ENDPOINT', 'localhost'),
      port: Number(this.config.get('S3_PORT', 9000)),
      useSSL: this.config.get('S3_USE_SSL', 'false') === 'true',
      accessKey: this.config.get('S3_ACCESS_KEY', 'minioadmin'),
      secretKey: this.config.get('S3_SECRET_KEY', 'minioadmin'),
    });
    this.bucketName = this.config.get('S3_BUCKET', 'eland-media');
  }

  async uploadMedia(
    propertyId: string,
    file: Express.Multer.File,
    options?: { type?: string; title?: string; isPrimary?: boolean },
  ) {
    // Файл байршуулах
    const fileName = `properties/${propertyId}/${Date.now()}-${file.originalname}`;

    await this.ensureBucket();

    await this.minioClient.putObject(
      this.bucketName,
      fileName,
      file.buffer,
      file.size,
      { 'Content-Type': file.mimetype },
    );

    const url = `/${this.bucketName}/${fileName}`;

    // DB-д хадгалах
    const media = await this.prisma.propertyMedia.create({
      data: {
        propertyId,
        url,
        type: (options?.type as any) || 'IMAGE',
        title: options?.title,
        isPrimary: options?.isPrimary || false,
        fileSize: file.size,
      },
    });

    return media;
  }

  async deleteMedia(mediaId: string) {
    const media = await this.prisma.propertyMedia.findUnique({
      where: { id: mediaId },
    });

    if (!media) {
      throw new NotFoundException('Медиа олдсонгүй');
    }

    // MinIO-оос устгах
    try {
      const key = media.url.replace(`/${this.bucketName}/`, '');
      await this.minioClient.removeObject(this.bucketName, key);
    } catch (error) {
      // Файл байхгүй байж болно - MinIO-с устгах амжилтгүй тохиолдол
      console.warn('MinIO файл устгаж чадсангүй:', error);
    }

    await this.prisma.propertyMedia.delete({ where: { id: mediaId } });
    return { message: 'Медиа устгагдлаа' };
  }

  async reorderMedia(propertyId: string, mediaIds: string[]) {
    const updates = mediaIds.map((id, index) =>
      this.prisma.propertyMedia.update({
        where: { id },
        data: { sortOrder: index },
      }),
    );

    await Promise.all(updates);
    return { message: 'Дараалал шинэчлэгдлээ' };
  }

  async setPrimary(propertyId: string, mediaId: string) {
    // Бүх media-ийн primary-г арилгах
    await this.prisma.propertyMedia.updateMany({
      where: { propertyId },
      data: { isPrimary: false },
    });

    // Шинэ primary тохируулах
    await this.prisma.propertyMedia.update({
      where: { id: mediaId },
      data: { isPrimary: true },
    });

    return { message: 'Үндсэн зураг тохируулагдлаа' };
  }

  private async ensureBucket() {
    const exists = await this.minioClient.bucketExists(this.bucketName);
    if (!exists) {
      await this.minioClient.makeBucket(this.bucketName);
    }
  }
}
