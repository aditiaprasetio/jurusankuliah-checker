import {
  Entity,
  Column,
  BeforeInsert,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { BaseEntity } from '../base.entity';
import uuid = require('uuid');
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsNotEmpty } from 'class-validator';
import { CrudValidationGroups } from '@nestjsx/crud';
import { Type } from 'class-transformer';
import { Department } from '../department/department.entity';
import { DeptFamilySubject } from '../deptfamilysubject/deptfamilysubject.entity';

const { CREATE, UPDATE } = CrudValidationGroups;

@Entity('department_families')
export class DepartmentFamily extends BaseEntity {
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
    () => Department,
    (department) => department.department_family,
  )
  @Type(() => Department)
  departments: Department[];

  @OneToMany(
    () => DeptFamilySubject,
    (deptfamily_subject) => deptfamily_subject.deptfamily,
  )
  @Type(() => DeptFamilySubject)
  deptfamily_subjects: DeptFamilySubject[];

  @BeforeInsert()
  protected beforeInsert(): void {
    if (!this.id) {
      this.id = uuid.v4();
    }
  }
}
