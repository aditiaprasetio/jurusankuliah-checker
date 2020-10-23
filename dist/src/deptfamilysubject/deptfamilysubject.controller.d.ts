import { CreateManyDto, CrudController, CrudRequest } from '@nestjsx/crud';
import { DeptFamilySubject } from './deptfamilysubject.entity';
import { DeptFamilySubjectService } from './deptfamilysubject.service';
export declare class DeptFamilySubjectController implements CrudController<DeptFamilySubject> {
    service: DeptFamilySubjectService;
    constructor(service: DeptFamilySubjectService);
    get base(): CrudController<DeptFamilySubject>;
    createOne(req: CrudRequest, dto: DeptFamilySubject, request: Request): Promise<DeptFamilySubject>;
    createMany(req: CrudRequest, dto: CreateManyDto<DeptFamilySubject>, request: Request): Promise<DeptFamilySubject[]>;
}
