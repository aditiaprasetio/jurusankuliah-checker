import { BaseEntity } from '../base.entity';
import { University } from '../university/university.entity';
import { DepartmentFamily } from '../departmentFamily/departmentFamily.entity';
import { Profile } from '../profile/profile.entity';
export declare class Department extends BaseEntity {
    name: string;
    description: string;
    type: string;
    url: string;
    university_id: string;
    created_by_id: string;
    department_family_id: string;
    meta_created_by: any;
    university: University;
    department_family: DepartmentFamily;
    profiles: Profile[];
    want_profiles: Profile[];
    protected beforeInsert(): void;
}
