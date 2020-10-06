import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Subject } from './subject.entity';

@Injectable()
export class SubjectService extends TypeOrmCrudService<Subject> {
  constructor(@InjectRepository(Subject) repo) {
    super(repo);
  }
}
