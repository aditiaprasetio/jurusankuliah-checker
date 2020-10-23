import { BaseEntity } from '../base.entity';
import { Department } from '../department/department.entity';
import { SubjectLike } from '../subjectLike/subjectLike.entity';
export declare class Profile extends BaseEntity {
    account_id: string;
    current_status: string;
    department_id: string;
    want_department_id: string;
    department: Department;
    want_department: Department;
    subjectlikes: SubjectLike[];
    protected beforeInsert(): void;
}
