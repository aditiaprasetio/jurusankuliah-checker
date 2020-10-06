import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { University } from './university.entity';

@Injectable()
export class UniversityService extends TypeOrmCrudService<University> {
  constructor(@InjectRepository(University) repo) {
    super(repo);
  }
}
