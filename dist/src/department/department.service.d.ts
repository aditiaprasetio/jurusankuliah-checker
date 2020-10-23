import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Department } from './department.entity';
export declare class DepartmentService extends TypeOrmCrudService<Department> {
    constructor(repo: any);
    customUpdateOne(id: string, dto: any): Promise<Department>;
}
