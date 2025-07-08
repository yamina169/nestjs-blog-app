import { CreateUserDto } from '@/user/dto/createUser.dto';
import { UserService } from '@/user/user.service';
import { AuthRequest } from '@/types/expressReequest.interface';
import {
  Body,
  Controller,
  Post,
  Get,
  UsePipes,
  ValidationPipe,
  Req, // <-- Ajout ici
} from '@nestjs/common';
import { Request } from 'express'; // <-- Import du type Request
import { IUserResponse } from './types/userResponse.interface';
import { LoginDto } from './dto/loginUser.dto';
import { User } from './decorators/user.decorators';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('users')
  @UsePipes(new ValidationPipe())
  async createUser(
    @Body('user') createUserDto: CreateUserDto,
  ): Promise<IUserResponse> {
    return await this.userService.createUser(createUserDto);
  }

  @Post('users/login')
  @UsePipes(new ValidationPipe())
  async loginUser(
    @Body('user') loginUserDto: LoginDto,
  ): Promise<IUserResponse> {
    const user = await this.userService.loginUser(loginUserDto);
    return this.userService.generateUserResponse(user);
  }

  @Get('user')
  async getCurrentUser(
    @User() user,
    @User('id') userId,
  ): Promise<IUserResponse> {
    console.log('userId', userId);
    return this.userService.generateUserResponse(user);
  }
}
