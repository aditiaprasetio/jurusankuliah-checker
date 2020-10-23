import { BaseEntity } from '../base.entity';
import { DepartmentFamily } from '../departmentFamily/departmentFamily.entity';
import { Subject } from '../subject/subject.entity';
export declare class DeptFamilySubject extends BaseEntity {
    departmentfamily_id: string;
    subject_id: string;
    important_value: string;
    created_by_id: string;
    meta_created_by: any;
    deptfamily: DepartmentFamily;
    subject: Subject;
    protected beforeInsert(): void;
}
