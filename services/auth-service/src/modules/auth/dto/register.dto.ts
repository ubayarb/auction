import { IsEmail, IsString, MinLength, MaxLength, IsOptional, Matches, IsEnum } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class RegisterDto {
  @ApiProperty({ example: 'user@example.com' })
  @IsEmail({}, { message: 'Имэйл хаяг буруу байна' })
  email: string;

  @ApiProperty({ example: '+97699001234' })
  @IsString()
  @Matches(/^\+976\d{8}$/, { message: 'Утасны дугаар +976XXXXXXXX форматтай байх ёстой' })
  phone: string;

  @ApiProperty({ example: 'Password123!' })
  @IsString()
  @MinLength(8, { message: 'Нууц үг хамгийн багадаа 8 тэмдэгт байна' })
  @MaxLength(50)
  @Matches(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, {
    message: 'Нууц үг том, жижиг үсэг, тоо агуулсан байх ёстой',
  })
  password: string;

  @ApiProperty({ example: 'Бат' })
  @IsString()
  @MinLength(2)
  @MaxLength(100)
  firstName: string;

  @ApiProperty({ example: 'Дорж' })
  @IsString()
  @MinLength(2)
  @MaxLength(100)
  lastName: string;

  @ApiPropertyOptional({ example: 'buyer', enum: ['buyer', 'owner', 'agent'] })
  @IsOptional()
  @IsEnum(['buyer', 'owner', 'agent'], { message: 'Үүрэг буруу байна' })
  role?: string;
}
