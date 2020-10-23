import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Subject } from './subject.entity';
export declare class SubjectService extends TypeOrmCrudService<Subject> {
    constructor(repo: any);
}
