import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { SubjectLike } from './subjectLike.entity';
export declare class SubjectLikeService extends TypeOrmCrudService<SubjectLike> {
    constructor(repo: any);
}
