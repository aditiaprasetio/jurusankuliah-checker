import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeptFamilySubjectController } from './deptfamilysubject.controller';
import { DeptFamilySubjectService } from './deptfamilysubject.service';
import { DeptFamilySubject } from './deptfamilysubject.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DeptFamilySubject])],

  providers: [DeptFamilySubjectService],

  controllers: [DeptFamilySubjectController],
})
export class DeptFamilySubjectModule {}
