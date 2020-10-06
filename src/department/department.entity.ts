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
import { University } from '../university/university.entity';
import { DepartmentFamily } from '../departmentFamily/departmentFamily.entity';

const { CREATE, UPDATE } = CrudValidationGroups;

@Entity('departments')
export class Department extends BaseEntity {
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
  @Column({ type: 'text', nullable: true })
  url: string;

  @ApiProperty()
  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE] })
  @Column({ type: 'varchar' })
  university_id: string;

  @ApiPropertyOptional()
  @IsOptional({ always: true })
  @Column({ type: 'varchar', nullable: true })
  created_by_id: string;

  @ApiPropertyOptional()
  @IsOptional({ always: true })
  @Column({ type: 'varchar', nullable: true })
  department_family_id: string;

  @ApiPropertyOptional()
  @IsOptional({ always: true })
  @Column({ type: 'json', nullable: true })
  meta_created_by: any;

  @ManyToOne(
    () => University,
    (university) => university.departments,
    {
      cascade: true,
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn({ name: 'university_id' })
  university: University;

  @ManyToOne(
    () => DepartmentFamily,
    (department_family) => department_family.departments,
    {
      cascade: true,
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn({ name: 'department_family_id' })
  department_family: DepartmentFamily;

  @BeforeInsert()
  protected beforeInsert(): void {
    if (!this.id) {
      this.id = uuid.v4();
    }
  }
}
