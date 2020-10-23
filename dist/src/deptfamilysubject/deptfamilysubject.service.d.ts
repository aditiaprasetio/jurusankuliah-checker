import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { DeptFamilySubject } from './deptfamilysubject.entity';
export declare class DeptFamilySubjectService extends TypeOrmCrudService<DeptFamilySubject> {
    constructor(repo: any);
}
