import { CrudController, CrudRequest } from '@nestjsx/crud';
import { Department } from './department.entity';
import { DepartmentService } from './department.service';
export declare class DepartmentController implements CrudController<Department> {
    service: DepartmentService;
    constructor(service: DepartmentService);
    get base(): CrudController<Department>;
    updateOne(req: CrudRequest, dto: Department, request: Request): Promise<Department>;
}
