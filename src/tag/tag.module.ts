import { Module } from '@nestjs/common';
import { TagContoller } from './tag.controller';
import { TagService } from './tag.service';

@Module({
  imports: [],
  controllers: [TagContoller],
  providers: [TagService],
})
export class TagModule {}
