import { Controller, Get } from '@nestjs/common';
import { TagService } from './tag.service';
@Controller('tags')
export class TagContoller {
  constructor(private readonly tagService: TagService) {}
  @Get()
  getAll() {
    return this.tagService.getAll();
  }
}
