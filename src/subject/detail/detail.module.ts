import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubjectDetailController } from './detail.controller';
import { SubjectDetailService } from './detail.service';
import { SubjectDetail } from './detail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SubjectDetail])],

  providers: [SubjectDetailService],

  controllers: [SubjectDetailController],
})
export class SubjectDetailModule {}
