import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from './profile.entity';

@Injectable()
export class ProfileService extends TypeOrmCrudService<Profile> {
  constructor(@InjectRepository(Profile) repo) {
    super(repo);
  }
}
