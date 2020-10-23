import { BaseEntity } from '../base.entity';
import { DeptFamilySubject } from '../deptfamilysubject/deptfamilysubject.entity';
import { SubjectDetail } from './detail/detail.entity';
export declare class Subject extends BaseEntity {
    name: string;
    description: string;
    type: string;
    created_by_id: string;
    meta_created_by: any;
    subject_details: SubjectDetail[];
    deptfamilysubjects: DeptFamilySubject[];
    protected beforeInsert(): void;
}
