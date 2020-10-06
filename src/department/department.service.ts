import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Department } from './department.entity';

@Injectable()
export class DepartmentService extends TypeOrmCrudService<Department> {
  constructor(@InjectRepository(Department) repo) {
    super(repo);
  }
}
