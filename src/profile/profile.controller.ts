import { Controller, Get, Param } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { User } from '@/user/decorators/user.decorators';

@Controller('profiles')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get(':username')
  async getProfile(
    @User('id') currentUserId: number,
    @Param('username') profileUsername: string,
  ) {
    const profile = await this.profileService.getProfile(
      currentUserId,
      profileUsername,
    );
    return this.profileService.generateProfileResponse(profile);
  }
}
