import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepartmentFamilyController } from './departmentFamily.controller';
import { DepartmentFamilyService } from './departmentFamily.service';
import { DepartmentFamily } from './departmentFamily.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DepartmentFamily])],

  providers: [DepartmentFamilyService],

  controllers: [DepartmentFamilyController],
})
export class DepartmentFamilyModule {}
