import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from './profile.entity';

@Injectable()
export class ProfileService extends TypeOrmCrudService<Profile> {
  constructor(@InjectRepository(Profile) repo) {
    super(repo);
  }

  async customCreateOne(dto: any) {
    try {
      const created = await this.repo.create(dto);
      return await this.repo.save(created);
    } catch (err) {
      return Promise.reject(err);
    }
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
