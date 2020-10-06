import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { DeptFamilySubject } from './deptfamilysubject.entity';

@Injectable()
export class DeptFamilySubjectService extends TypeOrmCrudService<
  DeptFamilySubject
> {
  constructor(@InjectRepository(DeptFamilySubject) repo) {
    super(repo);
  }
}
