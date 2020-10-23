import { CreateManyDto, CrudController, CrudRequest } from '@nestjsx/crud';
import { SubjectLike } from './subjectLike.entity';
import { SubjectLikeService } from './subjectLike.service';
export declare class SubjectLikeController implements CrudController<SubjectLike> {
    service: SubjectLikeService;
    constructor(service: SubjectLikeService);
    get base(): CrudController<SubjectLike>;
    createOne(req: CrudRequest, dto: SubjectLike, request: Request): Promise<SubjectLike>;
    createMany(req: CrudRequest, dto: CreateManyDto<SubjectLike>, request: Request): Promise<SubjectLike[]>;
}
