import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { SubjectDetail } from './detail.entity';

@Injectable()
export class SubjectDetailService extends TypeOrmCrudService<SubjectDetail> {
  constructor(@InjectRepository(SubjectDetail) repo) {
    super(repo);
  }
}
