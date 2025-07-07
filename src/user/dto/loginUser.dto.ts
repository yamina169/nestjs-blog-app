import { IsEmail, IsNotEmpty, IsString, isString } from 'class-validator';

export class LoginDto {
  @IsEmail()
  readonly email: string;
  @IsString()
  @IsNotEmpty()
  readonly password: string;
}
