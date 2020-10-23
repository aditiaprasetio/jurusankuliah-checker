import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { DepartmentFamily } from './departmentFamily.entity';
export declare class DepartmentFamilyService extends TypeOrmCrudService<DepartmentFamily> {
    constructor(repo: any);
}
