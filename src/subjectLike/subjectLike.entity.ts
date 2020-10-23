import { Entity, Column, BeforeInsert, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from '../base.entity';
import uuid = require('uuid');
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsNotEmpty } from 'class-validator';
import { CrudValidationGroups } from '@nestjsx/crud';
import { DepartmentFamily } from '../departmentFamily/departmentFamily.entity';
import { Subject } from '../subject/subject.entity';
import { Profile } from '../profile/profile.entity';

const { CREATE, UPDATE } = CrudValidationGroups;

@Entity('subject_likes')
export class SubjectLike extends BaseEntity {
  @ApiProperty()
  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE] })
  @Column({ type: 'varchar' })
  subject_id: string;

  @ApiPropertyOptional()
  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE] })
  @Column()
  order: number;

  @ApiPropertyOptional()
  @IsOptional({ always: true })
  @Column({ type: 'varchar' })
  created_by_id: string;

  @ManyToOne(
    () => Profile,
    (profile) => profile.subjectlikes,
    {
      cascade: true,
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn({ name: 'created_by_id' })
  profile: Profile;

  @ManyToOne(
    () => Subject,
    (subject) => subject.deptfamilysubjects,
    {
      cascade: true,
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn({ name: 'subject_id' })
  subject: Subject;

  @BeforeInsert()
  protected beforeInsert(): void {
    if (!this.id) {
      this.id = uuid.v4();
    }
  }
}
