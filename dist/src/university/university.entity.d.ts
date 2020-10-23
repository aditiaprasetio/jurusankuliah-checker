import { BaseEntity } from '../base.entity';
import { Department } from '../department/department.entity';
export declare class University extends BaseEntity {
    name: string;
    description: string;
    url: string;
    address: string;
    created_by_id: string;
    meta_created_by: any;
    departments: Department[];
    protected beforeInsert(): void;
}
