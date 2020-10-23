import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { SubjectLike } from './subjectLike.entity';

@Injectable()
export class SubjectLikeService extends TypeOrmCrudService<SubjectLike> {
  constructor(@InjectRepository(SubjectLike) repo) {
    super(repo);
  }
}
