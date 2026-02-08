import { IsNumber, IsOptional, IsBoolean, Min } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class PlaceBidDto {
  @ApiProperty()
  @IsNumber()
  @Min(1)
  amount: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  isAutoBid?: boolean;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  maxAmount?: number;
}
