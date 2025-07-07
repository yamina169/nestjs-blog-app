import { CreateUserDto } from '@/user/dto/createUser.dto';
import { UserService } from '@/user/user.service';
import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';

@ApiTags('users') // Groupe Swagger
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new user' })
  @ApiResponse({ status: 201, description: 'User successfully created' })
  @ApiBody({
    schema: {
      example: {
        user: {
          username: 'john_doe',
          email: 'john@example.com',
          password: 'securePassword123',
        },
      },
    },
  })
  @UsePipes(new ValidationPipe())
  async createUser(@Body('user') createUserDto: CreateUserDto): Promise<any> {
    return await this.userService.createUser(createUserDto);
  }
}
