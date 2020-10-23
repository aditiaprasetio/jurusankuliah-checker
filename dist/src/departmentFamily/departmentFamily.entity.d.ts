import { BaseEntity } from '../base.entity';
import { Department } from '../department/department.entity';
import { DeptFamilySubject } from '../deptfamilysubject/deptfamilysubject.entity';
export declare class DepartmentFamily extends BaseEntity {
    name: string;
    description: string;
    type: string;
    created_by_id: string;
    meta_created_by: any;
    departments: Department[];
    deptfamily_subjects: DeptFamilySubject[];
    protected beforeInsert(): void;
}
