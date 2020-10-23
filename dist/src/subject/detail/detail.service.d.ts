import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { SubjectDetail } from './detail.entity';
export declare class SubjectDetailService extends TypeOrmCrudService<SubjectDetail> {
    constructor(repo: any);
    getAverage(): Promise<any[]>;
}
