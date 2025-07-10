import { Module } from '@nestjs/common';
import { AppController } from '@/app.controller';
import { AppService } from '@/app.service';
import { TagModule } from '@/tag/tag.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from './ormconfig'; // your config file path
import { UserModule } from '@/user/user.module';
import { ConfigModule } from '@nestjs/config';
import { ArticleModule } from '@/article/article.module';
import { ProfileModule } from '@/profile/profile.module';
import { CommentModule } from './comment/comment.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TagModule,
    UserModule,
    ArticleModule,
    ProfileModule,
    CommentModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
