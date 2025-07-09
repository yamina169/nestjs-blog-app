import { UserEntity } from '@/user/user.entity';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProfileType } from './types/profile.type';
import { IProfileResponse } from './types/profileResponse.interfaces';
import { profile } from 'console';
import { FollowEntity } from './types/follow.entity';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    @InjectRepository(FollowEntity)
    private readonly followRepository: Repository<FollowEntity>,
  ) {}
  async getProfile(
    currentUserId: number,
    profileUsername: string,
  ): Promise<ProfileType> {
    const profile = await this.userRepository.findOne({
      where: {
        username: profileUsername,
      },
    });

    if (!profile) {
      throw new HttpException('Profile not found', HttpStatus.NOT_FOUND);
    }

    return { ...profile, following: false };
  }

  async followProfile(currentUserId: number, followingUsername: string) {
    const followingProfile = await this.userRepository.findOne({
      where: {
        username: followingUsername,
      },
    });

    if (!followingProfile) {
      throw new HttpException('Profile does not exist', HttpStatus.NOT_FOUND);
    }

    if (currentUserId === followingProfile.id) {
      throw new HttpException(
        'you can t follow yourself',
        HttpStatus.BAD_REQUEST,
      );
    }
    const follow = await this.followRepository.findOne({
      where: {
        followerId: currentUserId,
        followingId: followingProfile.id,
      },
    });

    if (!follow) {
      const newFollow = new FollowEntity();
      newFollow.followerId = currentUserId;
      newFollow.followingId = followingProfile.id;
      await this.followRepository.save(newFollow);
    }

    return { ...followingProfile, following: true };
  }

  generateProfileResponse(profile: ProfileType): IProfileResponse {
    delete profile?.password;
    delete profile?.email;

    return { profile };
  }

  //  generateProfileResponse() {}
}
