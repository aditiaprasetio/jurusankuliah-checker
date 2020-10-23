import { BaseEntity } from '../../base.entity';
import { Subject } from '../subject.entity';
export declare class SubjectDetail extends BaseEntity {
    subject_id: string;
    hafalan: string;
    analisis: string;
    created_by_id: string;
    meta_created_by: any;
    subject: Subject;
    protected beforeInsert(): void;
}
