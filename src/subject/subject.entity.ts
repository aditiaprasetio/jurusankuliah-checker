import { Entity, Column, BeforeInsert, OneToMany } from 'typeorm';
import { BaseEntity } from '../base.entity';
import uuid = require('uuid');
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsNotEmpty } from 'class-validator';
import { CrudValidationGroups } from '@nestjsx/crud';
import { DeptFamilySubject } from '../deptfamilysubject/deptfamilysubject.entity';
import { Type } from 'class-transformer';
import { SubjectDetail } from './detail/detail.entity';

const { CREATE, UPDATE } = CrudValidationGroups;

@Entity('subjects')
export class Subject extends BaseEntity {
  @ApiProperty()
  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE] })
  @Column({ type: 'varchar', unique: true })
  name: string;

  @ApiPropertyOptional()
  @IsOptional({ always: true })
  @Column({ type: 'text', nullable: true })
  description: string;

  @ApiPropertyOptional({
    description: `Available values: [SAINS/SOSIAL/BAHASA]`,
  })
  @IsOptional({ always: true })
  @Column({ type: 'varchar', nullable: true })
  type: string;

  @ApiPropertyOptional()
  @IsOptional({ always: true })
  @Column({ type: 'varchar', nullable: true })
  created_by_id: string;

  @ApiPropertyOptional()
  @IsOptional({ always: true })
  @Column({ type: 'json', nullable: true })
  meta_created_by: any;

  @OneToMany(
    () => SubjectDetail,
    (subject_detail) => subject_detail.subject,
  )
  @Type(() => SubjectDetail)
  subject_details: SubjectDetail[];

  @OneToMany(
    () => DeptFamilySubject,
    (deptfamilysubject) => deptfamilysubject.subject,
  )
  @Type(() => DeptFamilySubject)
  deptfamilysubjects: DeptFamilySubject[];

  @BeforeInsert()
  protected beforeInsert(): void {
    if (!this.id) {
      this.id = uuid.v4();
    }
  }
}
