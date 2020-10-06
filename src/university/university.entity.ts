import {
  Entity,
  Column,
  BeforeInsert,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { BaseEntity } from '../base.entity';
import uuid = require('uuid');
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsNotEmpty } from 'class-validator';
import { CrudValidationGroups } from '@nestjsx/crud';
import { Type } from 'class-transformer';
import { Department } from '../department/department.entity';

const { CREATE, UPDATE } = CrudValidationGroups;

@Entity('universities')
export class University extends BaseEntity {
  @ApiProperty()
  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE] })
  @Column({ type: 'varchar', unique: true })
  name: string;

  @ApiPropertyOptional()
  @IsOptional({ always: true })
  @Column({ type: 'text', nullable: true })
  description: string;

  @ApiPropertyOptional()
  @IsOptional({ always: true })
  @Column({ type: 'text', nullable: true })
  url: string;

  @ApiPropertyOptional()
  @IsOptional({ always: true })
  @Column({ type: 'text', nullable: true })
  address: string;

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
    (department) => department.university,
  )
  @Type(() => Department)
  departments: Department[];

  @BeforeInsert()
  protected beforeInsert(): void {
    if (!this.id) {
      this.id = uuid.v4();
    }
  }
}
