import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Department } from './department.entity';

@Injectable()
export class DepartmentService extends TypeOrmCrudService<Department> {
  constructor(@InjectRepository(Department) repo) {
    super(repo);
  }

  async customUpdateOne(id: string, dto: any) {
    try {
      await this.repo.update(id, dto);
      return await this.repo.findOne(dto);
    } catch (err) {
      return Promise.reject(err);
    }
  }
}
