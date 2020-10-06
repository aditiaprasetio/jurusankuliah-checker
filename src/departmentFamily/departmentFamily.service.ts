import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { DepartmentFamily } from './departmentFamily.entity';

@Injectable()
export class DepartmentFamilyService extends TypeOrmCrudService<
  DepartmentFamily
> {
  constructor(@InjectRepository(DepartmentFamily) repo) {
    super(repo);
  }
}
