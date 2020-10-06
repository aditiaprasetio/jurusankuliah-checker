import {
  Entity,
  Column,
  BeforeInsert,
  OneToMany,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { BaseEntity } from '../base.entity';
import uuid = require('uuid');
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsNotEmpty } from 'class-validator';
import { CrudValidationGroups } from '@nestjsx/crud';

const { CREATE, UPDATE } = CrudValidationGroups;
import { Department } from '../department/department.entity';

@Entity('profiles')
export class Profile extends BaseEntity {
  @ApiProperty()
  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE] })
  @Column({ type: 'varchar', unique: true })
  account_id: string;

  @ApiPropertyOptional({
    description: `Available values: [LULUS KULIAH, MAHASISWA, PEJUANG KULIAH ]`,
  })
  @IsOptional({ always: true })
  @Column({ type: 'varchar', nullable: true })
  current_status: string;

  @ApiPropertyOptional()
  @IsOptional({ always: true })
  @Column({ type: 'varchar', nullable: true })
  department_id: string;

  @ApiPropertyOptional()
  @IsOptional({ always: true })
  @Column({ type: 'varchar', nullable: true })
  want_department_id: string;

  @ManyToOne(
    () => Department,
    (department) => department.profiles,
    {
      cascade: true,
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn({ name: 'department_id' })
  department: Department;

  @ManyToOne(
    () => Department,
    (department) => department.want_profiles,
    {
      cascade: true,
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn({ name: 'want_department_id' })
  want_department: Department;

  @BeforeInsert()
  protected beforeInsert(): void {
    this.id = this.account_id;
  }
}
