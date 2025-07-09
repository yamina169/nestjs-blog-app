import { Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { User } from '@/user/decorators/user.decorators';
import { AuthGuard } from '@/user/guards/auth.guard';
import { IProfileResponse } from './types/profileResponse.interfaces';

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

  @Post(':username/follow')
  @UseGuards(AuthGuard)
  async followProfile(
    @User('id') currentUserId: number,
    @Param('username') followingUsername: string,
  ): Promise<IProfileResponse> {
    const newFollow = await this.profileService.followProfile(
      currentUserId,
      followingUsername,
    );
    return this.profileService.generateProfileResponse(newFollow);
  }
}
