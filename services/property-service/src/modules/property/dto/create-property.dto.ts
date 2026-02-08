import {
  IsString,
  IsNumber,
  IsOptional,
  IsBoolean,
  IsArray,
  ValidateNested,
  Min,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';

class AmenityDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  category?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  icon?: string;
}

export class CreatePropertyDto {
  @ApiProperty()
  @IsString()
  title: string;

  @ApiProperty()
  @IsString()
  description: string;

  @ApiProperty({ enum: ['APARTMENT', 'HOUSE', 'LAND', 'OFFICE', 'COMMERCIAL', 'WAREHOUSE', 'GARAGE', 'GERS_DISTRICT', 'OTHER'] })
  @IsString()
  type: string;

  @ApiProperty({ enum: ['SALE', 'RENT', 'DAILY_RENT', 'AUCTION', 'LEASE'] })
  @IsString()
  transaction: string;

  @ApiProperty()
  @IsNumber()
  @Min(0)
  price: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  currency?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  isPriceNegotiable?: boolean;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  totalArea?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  livingArea?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  landArea?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  rooms?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  bedrooms?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  bathrooms?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  floor?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  totalFloors?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  buildingYear?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  parkingSpaces?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  heating?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  condition?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  furniture?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  balcony?: boolean;

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  elevator?: boolean;

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  garage?: boolean;

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  security?: boolean;

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  playground?: boolean;

  @ApiProperty()
  @IsString()
  address: string;

  @ApiProperty()
  @IsString()
  city: string;

  @ApiProperty()
  @IsString()
  district: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  khoroo?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  zipCode?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  latitude?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  longitude?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  cadastralNumber?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  ownershipType?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  landUseType?: string;

  @ApiPropertyOptional({ type: [AmenityDto] })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AmenityDto)
  amenities?: AmenityDto[];
}
