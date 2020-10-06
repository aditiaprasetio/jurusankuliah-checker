import { Entity, Column, BeforeInsert, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from '../../base.entity';
import uuid = require('uuid');
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsNotEmpty } from 'class-validator';
import { CrudValidationGroups } from '@nestjsx/crud';
import { Subject } from '../subject.entity';

const { CREATE, UPDATE } = CrudValidationGroups;

@Entity('subject_details')
export class SubjectDetail extends BaseEntity {
  @ApiProperty()
  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE] })
  @Column({ type: 'varchar' })
  subject_id: string;

  @ApiProperty()
  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE] })
  @Column({ type: 'float' })
  hafalan: string;

  @ApiProperty()
  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE] })
  @Column({ type: 'float' })
  analisis: string;

  @ApiPropertyOptional()
  @IsOptional({ always: true })
  @Column({ type: 'varchar', nullable: true })
  created_by_id: string;

  @ApiPropertyOptional()
  @IsOptional({ always: true })
  @Column({ type: 'json', nullable: true })
  meta_created_by: any;

  @ManyToOne(
    () => Subject,
    (subject) => subject.subject_details,
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
