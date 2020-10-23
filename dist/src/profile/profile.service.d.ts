import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Profile } from './profile.entity';
export declare class ProfileService extends TypeOrmCrudService<Profile> {
    constructor(repo: any);
    customGetOne(id: string): Promise<Profile>;
    customUpdateOne(id: string, dto: any): Promise<Profile>;
}
