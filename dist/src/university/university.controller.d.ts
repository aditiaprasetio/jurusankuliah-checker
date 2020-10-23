import { CrudController } from '@nestjsx/crud';
import { University } from './university.entity';
import { UniversityService } from './university.service';
export declare class UniversityController implements CrudController<University> {
    service: UniversityService;
    constructor(service: UniversityService);
    get base(): CrudController<University>;
}
