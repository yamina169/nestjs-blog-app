import { IsEmail, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'john_doe' })
  @IsNotEmpty()
  readonly username: string;

  @ApiProperty({ example: 'john@example.com' })
  @IsEmail()
  readonly email: string;

  @ApiProperty({ example: 'securePassword123' })
  @IsNotEmpty()
  readonly password: string;
}
