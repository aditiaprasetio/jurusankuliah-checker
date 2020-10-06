import { Entity, Column, BeforeInsert, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from '../base.entity';
import uuid = require('uuid');
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsNotEmpty } from 'class-validator';
import { CrudValidationGroups } from '@nestjsx/crud';
import { DepartmentFamily } from '../departmentFamily/departmentFamily.entity';
import { Subject } from '../subject/subject.entity';

const { CREATE, UPDATE } = CrudValidationGroups;

@Entity('deptfamily_subjects')
export class DeptFamilySubject extends BaseEntity {
  @ApiProperty()
  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE] })
  @Column({ type: 'varchar' })
  departmentfamily_id: string;

  @ApiProperty()
  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE] })
  @Column({ type: 'varchar' })
  subject_id: string;

  @ApiPropertyOptional()
  @IsOptional({ always: true })
  @Column({ type: 'float', nullable: true })
  important_value: string;

  @ApiPropertyOptional()
  @IsOptional({ always: true })
  @Column({ type: 'varchar', nullable: true })
  created_by_id: string;

  @ApiPropertyOptional()
  @IsOptional({ always: true })
  @Column({ type: 'json', nullable: true })
  meta_created_by: any;

  @ManyToOne(
    () => DepartmentFamily,
    (departmentfamily) => departmentfamily.deptfamily_subjects,
    {
      cascade: true,
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn({ name: 'departmentfamily_id' })
  deptfamily: DepartmentFamily;

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
