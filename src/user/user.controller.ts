import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service'; // Changed to relative path
import { CreateUserDto } from './dto/createUser.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<any> {
    return await this.userService.createUser(createUserDto); // Pass the DTO to service
  }
}
