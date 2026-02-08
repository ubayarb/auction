import {
  IsString,
  IsNumber,
  IsOptional,
  IsBoolean,
  IsDateString,
  Min,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateAuctionDto {
  @ApiProperty()
  @IsString()
  propertyId: string;

  @ApiProperty()
  @IsString()
  title: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({ enum: ['ENGLISH', 'DUTCH', 'SEALED', 'VICKREY'] })
  @IsOptional()
  @IsString()
  type?: string;

  @ApiProperty()
  @IsNumber()
  @Min(0)
  startingPrice: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  reservePrice?: number;

  @ApiProperty()
  @IsNumber()
  @Min(1)
  bidIncrement: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  buyNowPrice?: number;

  @ApiProperty()
  @IsDateString()
  startTime: string;

  @ApiProperty()
  @IsDateString()
  endTime: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  extensionMinutes?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  depositRequired?: boolean;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  depositAmount?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  depositPercent?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  antiSnipingEnabled?: boolean;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  antiSnipingMinutes?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  terms?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  isPublic?: boolean;

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  autoExtend?: boolean;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  maxExtensions?: number;
}
