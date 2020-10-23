import { BaseEntity } from '../base.entity';
import { Subject } from '../subject/subject.entity';
import { Profile } from '../profile/profile.entity';
export declare class SubjectLike extends BaseEntity {
    subject_id: string;
    order: number;
    created_by_id: string;
    profile: Profile;
    subject: Subject;
    protected beforeInsert(): void;
}
