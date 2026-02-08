import { Injectable, ConflictException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class FavoriteService {
  constructor(private readonly prisma: PrismaService) {}

  async addFavorite(userId: string, propertyId: string) {
    const existing = await this.prisma.favorite.findUnique({
      where: { userId_propertyId: { userId, propertyId } },
    });

    if (existing) {
      throw new ConflictException('Аль хэдийн хадгалагдсан байна');
    }

    const favorite = await this.prisma.favorite.create({
      data: { userId, propertyId },
    });

    await this.prisma.property.update({
      where: { id: propertyId },
      data: { favoriteCount: { increment: 1 } },
    });

    return favorite;
  }

  async removeFavorite(userId: string, propertyId: string) {
    await this.prisma.favorite.delete({
      where: { userId_propertyId: { userId, propertyId } },
    });

    await this.prisma.property.update({
      where: { id: propertyId },
      data: { favoriteCount: { decrement: 1 } },
    });

    return { message: 'Хадгалсан зар хасагдлаа' };
  }

  async getUserFavorites(userId: string, page = 1, limit = 20) {
    const skip = (page - 1) * limit;

    const [favorites, total] = await Promise.all([
      this.prisma.favorite.findMany({
        where: { userId },
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
        include: {
          property: {
            include: {
              media: { where: { isPrimary: true }, take: 1 },
            },
          },
        },
      }),
      this.prisma.favorite.count({ where: { userId } }),
    ]);

    return {
      data: favorites.map((f: { property: any }) => f.property),
      meta: { total, page, limit, totalPages: Math.ceil(total / limit) },
    };
  }

  async isFavorited(userId: string, propertyId: string) {
    const fav = await this.prisma.favorite.findUnique({
      where: { userId_propertyId: { userId, propertyId } },
    });
    return { isFavorited: !!fav };
  }
}
