import { Entity, Column, BeforeInsert } from 'typeorm';
import { BaseEntity } from '../base.entity';
import uuid = require('uuid');
import { ApiModelPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsNotEmpty } from 'class-validator';
import { CrudValidationGroups } from '@nestjsx/crud';
import { ERoles, EGender } from './account.enum';

const { CREATE, UPDATE } = CrudValidationGroups;

@Entity('accounts')
export class Account extends BaseEntity {
  @ApiModelPropertyOptional()
  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE] })
  @Column({ type: 'varchar', unique: true })
  username: string;

  @ApiModelPropertyOptional()
  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE] })
  @Column({ type: 'varchar' })
  password: string;

  @ApiModelPropertyOptional()
  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE] })
  @Column({ type: 'varchar', unique: true })
  email: string;

  @ApiModelPropertyOptional()
  @IsOptional({ always: true })
  @Column({ type: 'text', nullable: true })
  photo_url: string;

  @ApiModelPropertyOptional({ description: 'Example: +6285645123123' })
  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE] })
  @Column({ type: 'varchar', unique: true, nullable: true })
  phone_number: string;

  @ApiModelPropertyOptional()
  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE] })
  @Column({ type: 'varchar' })
  first_name: string;

  @ApiModelPropertyOptional()
  @IsOptional({ always: true })
  @Column({ type: 'varchar', nullable: true })
  last_name: string;

  @ApiModelPropertyOptional({
    description: `Avaliable values: [${Object.keys(EGender).join(', ')}]`,
  })
  @IsOptional({ always: true })
  @Column({ type: 'varchar', nullable: true })
  gender: EGender;

  @ApiModelPropertyOptional({
    description: `Avaliable values: [${Object.keys(ERoles).join(', ')}]`,
  })
  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE] })
  @Column({ type: 'simple-array', nullable: true })
  roles: ERoles[];

  @ApiModelPropertyOptional()
  @IsOptional({ always: true })
  @Column({ type: 'varchar', nullable: true })
  created_by_id: string;

  @ApiModelPropertyOptional()
  @IsOptional({ always: true })
  @Column({ type: 'json', nullable: true })
  meta_created_by: JSON;

  @ApiModelPropertyOptional()
  @IsOptional({ always: true })
  @Column({ type: 'varchar', nullable: true })
  forgot_password_token: string;

  @BeforeInsert()
  protected beforeInsert(): void {
    if (!this.id) {
      this.id = uuid.v4();
    }
    if (!this.roles) {
      this.roles = [ERoles.USER];
    }
  }
}
