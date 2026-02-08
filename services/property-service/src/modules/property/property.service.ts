import {
  Injectable,
  NotFoundException,
  ForbiddenException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { SearchPropertyDto } from './dto/search-property.dto';
import { Prisma } from '../../generated/prisma';

@Injectable()
export class PropertyService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreatePropertyDto, userId: string) {
    const slug = this.generateSlug(dto.title);

    const property = await this.prisma.property.create({
      data: {
        ownerId: userId,
        title: dto.title,
        slug,
        description: dto.description,
        type: dto.type as any,
        transaction: dto.transaction as any,
        price: dto.price,
        pricePerSqm: dto.totalArea ? dto.price / dto.totalArea : null,
        currency: dto.currency || 'MNT',
        isPriceNegotiable: dto.isPriceNegotiable || false,
        totalArea: dto.totalArea,
        livingArea: dto.livingArea,
        landArea: dto.landArea,
        rooms: dto.rooms,
        bedrooms: dto.bedrooms,
        bathrooms: dto.bathrooms,
        floor: dto.floor,
        totalFloors: dto.totalFloors,
        buildingYear: dto.buildingYear,
        parkingSpaces: dto.parkingSpaces,
        heating: dto.heating as any,
        condition: dto.condition as any,
        furniture: dto.furniture as any,
        balcony: dto.balcony || false,
        elevator: dto.elevator || false,
        garage: dto.garage || false,
        security: dto.security || false,
        playground: dto.playground || false,
        address: dto.address,
        city: dto.city,
        district: dto.district,
        khoroo: dto.khoroo,
        zipCode: dto.zipCode,
        latitude: dto.latitude,
        longitude: dto.longitude,
        cadastralNumber: dto.cadastralNumber,
        ownershipType: dto.ownershipType,
        landUseType: dto.landUseType,
        status: 'DRAFT',
      },
      include: {
        media: true,
        amenities: true,
      },
    });

    // Amenities нэмэх
    if (dto.amenities?.length) {
      await this.prisma.propertyAmenity.createMany({
        data: dto.amenities.map((a) => ({
          propertyId: property.id,
          name: a.name,
          category: a.category,
          icon: a.icon,
        })),
      });
    }

    // Үнийн түүх
    await this.prisma.propertyPriceHistory.create({
      data: {
        propertyId: property.id,
        price: dto.price,
        currency: dto.currency || 'MNT',
        reason: 'Анхны үнэ',
      },
    });

    return this.findById(property.id);
  }

  async findById(id: string) {
    const property = await this.prisma.property.findUnique({
      where: { id },
      include: {
        media: { orderBy: { sortOrder: 'asc' } },
        amenities: true,
        priceHistory: { orderBy: { changedAt: 'desc' }, take: 10 },
        _count: { select: { favorites: true, inquiries: true } },
      },
    });

    if (!property) {
      throw new NotFoundException('Зар олдсонгүй');
    }

    return property;
  }

  async findBySlug(slug: string) {
    const property = await this.prisma.property.findUnique({
      where: { slug },
      include: {
        media: { orderBy: { sortOrder: 'asc' } },
        amenities: true,
        _count: { select: { favorites: true, inquiries: true } },
      },
    });

    if (!property) {
      throw new NotFoundException('Зар олдсонгүй');
    }

    // View count нэмэх
    await this.prisma.property.update({
      where: { id: property.id },
      data: { viewCount: { increment: 1 } },
    });

    return property;
  }

  async search(dto: SearchPropertyDto) {
    const page = dto.page || 1;
    const limit = dto.limit || 20;
    const skip = (page - 1) * limit;

    const where = this.buildSearchWhere(dto);
    const orderBy = this.getSearchOrderBy(dto.sortBy);

    const [properties, total] = await Promise.all([
      this.prisma.property.findMany({
        where,
        skip,
        take: limit,
        orderBy,
        include: {
          media: {
            where: { isPrimary: true },
            take: 1,
          },
          _count: { select: { favorites: true } },
        },
      }),
      this.prisma.property.count({ where }),
    ]);

    return {
      data: properties,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  private buildSearchWhere(dto: SearchPropertyDto): Prisma.PropertyWhereInput {
    const where: Prisma.PropertyWhereInput = {
      status: 'ACTIVE',
    };

    if (dto.type) where.type = dto.type as any;
    if (dto.transaction) where.transaction = dto.transaction as any;
    if (dto.city) where.city = { equals: dto.city, mode: 'insensitive' };
    if (dto.district) where.district = { equals: dto.district, mode: 'insensitive' };

    this.applyRangeFilter(where, 'price', dto.minPrice, dto.maxPrice);
    this.applyRangeFilter(where, 'totalArea', dto.minArea, dto.maxArea);

    if (dto.rooms) where.rooms = dto.rooms;
    if (dto.bedrooms) where.bedrooms = { gte: dto.bedrooms };
    if (dto.bathrooms) where.bathrooms = { gte: dto.bathrooms };
    if (dto.query) where.OR = this.buildTextSearch(dto.query);

    return where;
  }

  private applyRangeFilter(
    where: Prisma.PropertyWhereInput,
    field: 'price' | 'totalArea',
    min?: number,
    max?: number,
  ): void {
    if (!min && !max) return;
    const filter: Record<string, number> = {};
    if (min) filter.gte = min;
    if (max) filter.lte = max;
    (where as any)[field] = filter;
  }

  private buildTextSearch(query: string): Prisma.PropertyWhereInput[] {
    return [
      { title: { contains: query, mode: 'insensitive' } },
      { description: { contains: query, mode: 'insensitive' } },
      { address: { contains: query, mode: 'insensitive' } },
    ];
  }

  private getSearchOrderBy(sortBy?: string): Prisma.PropertyOrderByWithRelationInput {
    if (!sortBy) return { createdAt: 'desc' };
    const sortMap: Record<string, Prisma.PropertyOrderByWithRelationInput> = {
      price_asc: { price: 'asc' },
      price_desc: { price: 'desc' },
      newest: { createdAt: 'desc' },
      oldest: { createdAt: 'asc' },
      area_asc: { totalArea: 'asc' },
      area_desc: { totalArea: 'desc' },
      popular: { viewCount: 'desc' },
    };
    return sortMap[sortBy] || { createdAt: 'desc' };
  }

  async update(id: string, dto: UpdatePropertyDto, userId: string) {
    const property = await this.prisma.property.findUnique({ where: { id } });

    if (!property) {
      throw new NotFoundException('Зар олдсонгүй');
    }

    if (property.ownerId !== userId) {
      throw new ForbiddenException('Зөвхөн эзэмшигч засах боломжтой');
    }

    // Үнэ өөрчлөгдсөн бол түүхэнд нэмэх
    if (dto.price && dto.price !== Number(property.price)) {
      await this.prisma.propertyPriceHistory.create({
        data: {
          propertyId: id,
          price: dto.price,
          currency: dto.currency || property.currency,
          reason: 'Үнэ шинэчлэлт',
        },
      });
    }

    const updated = await this.prisma.property.update({
      where: { id },
      data: {
        ...dto,
        pricePerSqm: dto.price && property.totalArea
          ? dto.price / property.totalArea
          : undefined,
      } as any,
      include: {
        media: { orderBy: { sortOrder: 'asc' } },
        amenities: true,
      },
    });

    return updated;
  }

  async delete(id: string, userId: string) {
    const property = await this.prisma.property.findUnique({ where: { id } });

    if (!property) {
      throw new NotFoundException('Зар олдсонгүй');
    }

    if (property.ownerId !== userId) {
      throw new ForbiddenException('Зөвхөн эзэмшигч устгах боломжтой');
    }

    await this.prisma.property.delete({ where: { id } });
    return { message: 'Зар амжилттай устгагдлаа' };
  }

  async publish(id: string, userId: string) {
    const property = await this.prisma.property.findUnique({ where: { id } });

    if (!property) {
      throw new NotFoundException('Зар олдсонгүй');
    }

    if (property.ownerId !== userId) {
      throw new ForbiddenException('Зөвхөн эзэмшигч нийтлэх боломжтой');
    }

    if (property.status !== 'DRAFT') {
      throw new BadRequestException('Зөвхөн ноорог зарыг нийтлэх боломжтой');
    }

    return this.prisma.property.update({
      where: { id },
      data: {
        status: 'PENDING_REVIEW',
        publishedAt: new Date(),
      },
    });
  }

  async approve(id: string, adminId: string) {
    const property = await this.prisma.property.findUnique({ where: { id } });

    if (!property) {
      throw new NotFoundException('Зар олдсонгүй');
    }

    if (property.status !== 'PENDING_REVIEW') {
      throw new BadRequestException('Зөвхөн хүлээгдэж буй зарыг батлах боломжтой');
    }

    return this.prisma.property.update({
      where: { id },
      data: {
        status: 'ACTIVE',
        isVerified: true,
        verifiedAt: new Date(),
        verifiedBy: adminId,
        expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 хоног
      },
    });
  }

  async reject(id: string, reason: string) {
    return this.prisma.property.update({
      where: { id },
      data: { status: 'REJECTED' },
    });
  }

  async getMyProperties(userId: string, page = 1, limit = 20) {
    const skip = (page - 1) * limit;

    const [properties, total] = await Promise.all([
      this.prisma.property.findMany({
        where: { ownerId: userId },
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
        include: {
          media: { where: { isPrimary: true }, take: 1 },
          _count: { select: { favorites: true, inquiries: true } },
        },
      }),
      this.prisma.property.count({ where: { ownerId: userId } }),
    ]);

    return {
      data: properties,
      meta: { total, page, limit, totalPages: Math.ceil(total / limit) },
    };
  }

  private generateSlug(title: string): string {
    const base = title
      .toLowerCase()
      .replaceAll(/[^\w\s-]/g, '')
      .replaceAll(/\s+/g, '-')
      .replaceAll(/-+/g, '-')
      .trim();

    const suffix = Date.now().toString(36);
    return `${base}-${suffix}`;
  }
}
