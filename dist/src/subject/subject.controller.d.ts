import { CrudController } from '@nestjsx/crud';
import { Subject } from './subject.entity';
import { SubjectService } from './subject.service';
export declare class SubjectController implements CrudController<Subject> {
    service: SubjectService;
    constructor(service: SubjectService);
    get base(): CrudController<Subject>;
}
