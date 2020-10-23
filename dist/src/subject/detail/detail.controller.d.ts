import { CreateManyDto, CrudController, CrudRequest } from '@nestjsx/crud';
import { SubjectDetail } from './detail.entity';
import { SubjectDetailService } from './detail.service';
export declare class SubjectDetailController implements CrudController<SubjectDetail> {
    service: SubjectDetailService;
    constructor(service: SubjectDetailService);
    get base(): CrudController<SubjectDetail>;
    createOne(req: CrudRequest, dto: SubjectDetail, request: Request): Promise<SubjectDetail>;
    createMany(req: CrudRequest, dto: CreateManyDto<SubjectDetail>, request: Request): Promise<SubjectDetail[]>;
    getAverage(): Promise<any[]>;
}
