import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubjectController } from './subject.controller';
import { SubjectService } from './subject.service';
import { Subject } from './subject.entity';
import { SubjectDetailModule } from './detail/detail.module';

@Module({
  imports: [TypeOrmModule.forFeature([Subject]), SubjectDetailModule],

  providers: [SubjectService],

  controllers: [SubjectController],
})
export class SubjectModule {}
