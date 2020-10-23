import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubjectLikeController } from './subjectLike.controller';
import { SubjectLikeService } from './subjectLike.service';
import { SubjectLike } from './subjectLike.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SubjectLike])],

  providers: [SubjectLikeService],

  controllers: [SubjectLikeController],
})
export class SubjectLikeModule {}
