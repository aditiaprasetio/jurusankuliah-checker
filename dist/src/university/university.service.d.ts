import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { University } from './university.entity';
export declare class UniversityService extends TypeOrmCrudService<University> {
    constructor(repo: any);
}
