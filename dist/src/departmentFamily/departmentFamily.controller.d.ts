import { CrudController } from '@nestjsx/crud';
import { DepartmentFamily } from './departmentFamily.entity';
import { DepartmentFamilyService } from './departmentFamily.service';
export declare class DepartmentFamilyController implements CrudController<DepartmentFamily> {
    service: DepartmentFamilyService;
    constructor(service: DepartmentFamilyService);
    get base(): CrudController<DepartmentFamily>;
}
