import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class createUserDto {
  @ApiProperty({
    example: 'John Doe',
    description: 'The name of the user',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 'john.doe@example.com',
    description: 'The email of the user',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  email: string;

  @ApiProperty({
    example: 25,
    description: 'The age of the user',
    required: true,
  })
  @IsNotEmpty()
  @IsNumber()
  phone: number;
}

export class updateUserDto {
  @ApiProperty({ example: 'John Doe', description: 'The name of the user' })
  @IsOptional()
  name: string;

  @ApiProperty({
    example: 'john.doe@example.com',
    description: 'The email of the user',
  })
  @IsOptional()
  email: string;

  @ApiProperty({ example: 25, description: 'The age of the user' })
  @IsOptional()
  phone: number;
}
