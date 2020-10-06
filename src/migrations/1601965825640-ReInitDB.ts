import { MigrationInterface, QueryRunner } from 'typeorm';

export class ReInitDB1601965825640 implements MigrationInterface {
  name = 'ReInitDB1601965825640';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE `profiles` DROP FOREIGN KEY `FK_1cba247d9d6bf89120e6777448b`',
      undefined,
    );
    await queryRunner.query(
      'DROP INDEX `REL_1cba247d9d6bf89120e6777448` ON `profiles`',
      undefined,
    );
    await queryRunner.query(
      'CREATE TABLE `deptfamily_subjects` (`id` varchar(255) NOT NULL, `created_at` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6), `departmentfamily_id` varchar(255) NOT NULL, `subject_id` varchar(255) NOT NULL, `important_value` float NULL, `created_by_id` varchar(255) NULL, `meta_created_by` json NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB',
      undefined,
    );
    await queryRunner.query(
      'CREATE TABLE `department_families` (`id` varchar(255) NOT NULL, `created_at` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6), `name` varchar(255) NOT NULL, `description` text NULL, `type` varchar(255) NULL, `created_by_id` varchar(255) NULL, `meta_created_by` json NULL, UNIQUE INDEX `IDX_7472b240cd145382ce6c12aef8` (`name`), PRIMARY KEY (`id`)) ENGINE=InnoDB',
      undefined,
    );
    await queryRunner.query(
      'ALTER TABLE `profiles` DROP COLUMN `univdept_id`',
      undefined,
    );
    await queryRunner.query(
      'ALTER TABLE `profiles` DROP COLUMN `univdeptId`',
      undefined,
    );
    await queryRunner.query(
      'ALTER TABLE `departments` ADD `university_id` varchar(255) NOT NULL',
      undefined,
    );
    await queryRunner.query(
      'ALTER TABLE `departments` ADD `department_family_id` varchar(255) NULL',
      undefined,
    );
    await queryRunner.query(
      'ALTER TABLE `profiles` ADD `current_status` varchar(255) NULL',
      undefined,
    );
    await queryRunner.query(
      'ALTER TABLE `profiles` ADD `department_id` varchar(255) NULL',
      undefined,
    );
    await queryRunner.query(
      'ALTER TABLE `profiles` ADD `want_department_id` varchar(255) NULL',
      undefined,
    );
    await queryRunner.query(
      'ALTER TABLE `profiles` ADD `departmentId` varchar(255) NULL',
      undefined,
    );
    await queryRunner.query(
      'ALTER TABLE `profiles` ADD UNIQUE INDEX `IDX_3955d6e65b06c1cad4f58dfc11` (`departmentId`)',
      undefined,
    );
    await queryRunner.query(
      'ALTER TABLE `profiles` ADD `wantDepartmentId` varchar(255) NULL',
      undefined,
    );
    await queryRunner.query(
      'ALTER TABLE `profiles` ADD UNIQUE INDEX `IDX_6214cb4735dd3636095e3aadae` (`wantDepartmentId`)',
      undefined,
    );
    await queryRunner.query(
      'CREATE UNIQUE INDEX `REL_3955d6e65b06c1cad4f58dfc11` ON `profiles` (`departmentId`)',
      undefined,
    );
    await queryRunner.query(
      'CREATE UNIQUE INDEX `REL_6214cb4735dd3636095e3aadae` ON `profiles` (`wantDepartmentId`)',
      undefined,
    );
    await queryRunner.query(
      'ALTER TABLE `deptfamily_subjects` ADD CONSTRAINT `FK_b3458ae10f54a9c97cd2b528a27` FOREIGN KEY (`departmentfamily_id`) REFERENCES `department_families`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION',
      undefined,
    );
    await queryRunner.query(
      'ALTER TABLE `deptfamily_subjects` ADD CONSTRAINT `FK_ed7b77d1f1fa92e9ecdb4759d91` FOREIGN KEY (`subject_id`) REFERENCES `subjects`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION',
      undefined,
    );
    await queryRunner.query(
      'ALTER TABLE `departments` ADD CONSTRAINT `FK_85dfd120ea18b8c0fb942eacf7b` FOREIGN KEY (`university_id`) REFERENCES `universities`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION',
      undefined,
    );
    await queryRunner.query(
      'ALTER TABLE `departments` ADD CONSTRAINT `FK_12be891df39952ce229b86d8509` FOREIGN KEY (`department_family_id`) REFERENCES `department_families`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION',
      undefined,
    );
    await queryRunner.query(
      'ALTER TABLE `profiles` ADD CONSTRAINT `FK_3955d6e65b06c1cad4f58dfc11d` FOREIGN KEY (`departmentId`) REFERENCES `departments`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION',
      undefined,
    );
    await queryRunner.query(
      'ALTER TABLE `profiles` ADD CONSTRAINT `FK_6214cb4735dd3636095e3aadae0` FOREIGN KEY (`wantDepartmentId`) REFERENCES `departments`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION',
      undefined,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE `profiles` DROP FOREIGN KEY `FK_6214cb4735dd3636095e3aadae0`',
      undefined,
    );
    await queryRunner.query(
      'ALTER TABLE `profiles` DROP FOREIGN KEY `FK_3955d6e65b06c1cad4f58dfc11d`',
      undefined,
    );
    await queryRunner.query(
      'ALTER TABLE `departments` DROP FOREIGN KEY `FK_12be891df39952ce229b86d8509`',
      undefined,
    );
    await queryRunner.query(
      'ALTER TABLE `departments` DROP FOREIGN KEY `FK_85dfd120ea18b8c0fb942eacf7b`',
      undefined,
    );
    await queryRunner.query(
      'ALTER TABLE `deptfamily_subjects` DROP FOREIGN KEY `FK_ed7b77d1f1fa92e9ecdb4759d91`',
      undefined,
    );
    await queryRunner.query(
      'ALTER TABLE `deptfamily_subjects` DROP FOREIGN KEY `FK_b3458ae10f54a9c97cd2b528a27`',
      undefined,
    );
    await queryRunner.query(
      'DROP INDEX `REL_6214cb4735dd3636095e3aadae` ON `profiles`',
      undefined,
    );
    await queryRunner.query(
      'DROP INDEX `REL_3955d6e65b06c1cad4f58dfc11` ON `profiles`',
      undefined,
    );
    await queryRunner.query(
      'ALTER TABLE `profiles` DROP INDEX `IDX_6214cb4735dd3636095e3aadae`',
      undefined,
    );
    await queryRunner.query(
      'ALTER TABLE `profiles` DROP COLUMN `wantDepartmentId`',
      undefined,
    );
    await queryRunner.query(
      'ALTER TABLE `profiles` DROP INDEX `IDX_3955d6e65b06c1cad4f58dfc11`',
      undefined,
    );
    await queryRunner.query(
      'ALTER TABLE `profiles` DROP COLUMN `departmentId`',
      undefined,
    );
    await queryRunner.query(
      'ALTER TABLE `profiles` DROP COLUMN `want_department_id`',
      undefined,
    );
    await queryRunner.query(
      'ALTER TABLE `profiles` DROP COLUMN `department_id`',
      undefined,
    );
    await queryRunner.query(
      'ALTER TABLE `profiles` DROP COLUMN `current_status`',
      undefined,
    );
    await queryRunner.query(
      'ALTER TABLE `departments` DROP COLUMN `department_family_id`',
      undefined,
    );
    await queryRunner.query(
      'ALTER TABLE `departments` DROP COLUMN `university_id`',
      undefined,
    );
    await queryRunner.query(
      'ALTER TABLE `profiles` ADD `univdeptId` varchar(255) NULL',
      undefined,
    );
    await queryRunner.query(
      'ALTER TABLE `profiles` ADD `univdept_id` varchar(255) NULL',
      undefined,
    );
    await queryRunner.query(
      'DROP INDEX `IDX_7472b240cd145382ce6c12aef8` ON `department_families`',
      undefined,
    );
    await queryRunner.query('DROP TABLE `department_families`', undefined);
    await queryRunner.query('DROP TABLE `deptfamily_subjects`', undefined);
    await queryRunner.query(
      'CREATE UNIQUE INDEX `REL_1cba247d9d6bf89120e6777448` ON `profiles` (`univdeptId`)',
      undefined,
    );
    await queryRunner.query(
      'ALTER TABLE `profiles` ADD CONSTRAINT `FK_1cba247d9d6bf89120e6777448b` FOREIGN KEY (`univdeptId`) REFERENCES `univdepts`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION',
      undefined,
    );
  }
}
