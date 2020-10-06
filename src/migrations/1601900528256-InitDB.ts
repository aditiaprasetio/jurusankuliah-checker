import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitDB1601900528256 implements MigrationInterface {
  name = 'InitDB1601900528256';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE `universities` (`id` varchar(255) NOT NULL, `created_at` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6), `name` varchar(255) NOT NULL, `description` text NULL, `url` text NULL, `address` text NULL, `created_by_id` varchar(255) NULL, `meta_created_by` json NULL, UNIQUE INDEX `IDX_25b08a78732a663bb35872eaa7` (`name`), PRIMARY KEY (`id`)) ENGINE=InnoDB',
      undefined,
    );
    await queryRunner.query(
      'CREATE TABLE `subject_details` (`id` varchar(255) NOT NULL, `created_at` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6), `subject_id` varchar(255) NOT NULL, `hafalan` float NOT NULL, `analisis` float NOT NULL, `created_by_id` varchar(255) NULL, `meta_created_by` json NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB',
      undefined,
    );
    await queryRunner.query(
      'CREATE TABLE `subjects` (`id` varchar(255) NOT NULL, `created_at` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6), `name` varchar(255) NOT NULL, `description` text NULL, `type` varchar(255) NULL, `created_by_id` varchar(255) NULL, `meta_created_by` json NULL, UNIQUE INDEX `IDX_47a287fe64bd0e1027e603c335` (`name`), PRIMARY KEY (`id`)) ENGINE=InnoDB',
      undefined,
    );
    await queryRunner.query(
      'CREATE TABLE `univdeptsubjects` (`id` varchar(255) NOT NULL, `created_at` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6), `univdept_id` varchar(255) NOT NULL, `subject_id` varchar(255) NOT NULL, `important_value` float NULL, `created_by_id` varchar(255) NULL, `meta_created_by` json NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB',
      undefined,
    );
    await queryRunner.query(
      'CREATE TABLE `univdepts` (`id` varchar(255) NOT NULL, `created_at` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6), `university_id` varchar(255) NOT NULL, `department_id` varchar(255) NOT NULL, `created_by_id` varchar(255) NULL, `meta_created_by` json NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB',
      undefined,
    );
    await queryRunner.query(
      'CREATE TABLE `departments` (`id` varchar(255) NOT NULL, `created_at` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6), `name` varchar(255) NOT NULL, `description` text NULL, `type` varchar(255) NULL, `url` text NULL, `created_by_id` varchar(255) NULL, `meta_created_by` json NULL, UNIQUE INDEX `IDX_8681da666ad9699d568b3e9106` (`name`), PRIMARY KEY (`id`)) ENGINE=InnoDB',
      undefined,
    );
    await queryRunner.query(
      'CREATE TABLE `profiles` (`id` varchar(255) NOT NULL, `created_at` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6), `account_id` varchar(255) NOT NULL, `univdept_id` varchar(255) NULL, `univdeptId` varchar(255) NULL, UNIQUE INDEX `IDX_48f07a756b8f321aa99b06aee1` (`account_id`), UNIQUE INDEX `REL_1cba247d9d6bf89120e6777448` (`univdeptId`), PRIMARY KEY (`id`)) ENGINE=InnoDB',
      undefined,
    );
    await queryRunner.query(
      'ALTER TABLE `subject_details` ADD CONSTRAINT `FK_40b20eb8d25963003c12f6907a2` FOREIGN KEY (`subject_id`) REFERENCES `subjects`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION',
      undefined,
    );
    await queryRunner.query(
      'ALTER TABLE `univdeptsubjects` ADD CONSTRAINT `FK_f82270fdc6b18b4eb3e4030fd01` FOREIGN KEY (`univdept_id`) REFERENCES `univdepts`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION',
      undefined,
    );
    await queryRunner.query(
      'ALTER TABLE `univdeptsubjects` ADD CONSTRAINT `FK_d1503011c1f34bb4dfdb5856b63` FOREIGN KEY (`subject_id`) REFERENCES `subjects`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION',
      undefined,
    );
    await queryRunner.query(
      'ALTER TABLE `univdepts` ADD CONSTRAINT `FK_b7f8b50c850e8fadc9b5bb1d60b` FOREIGN KEY (`university_id`) REFERENCES `universities`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION',
      undefined,
    );
    await queryRunner.query(
      'ALTER TABLE `univdepts` ADD CONSTRAINT `FK_31b9292ae9b98c9e0d09220d320` FOREIGN KEY (`department_id`) REFERENCES `departments`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION',
      undefined,
    );
    await queryRunner.query(
      'ALTER TABLE `profiles` ADD CONSTRAINT `FK_1cba247d9d6bf89120e6777448b` FOREIGN KEY (`univdeptId`) REFERENCES `univdepts`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION',
      undefined,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE `profiles` DROP FOREIGN KEY `FK_1cba247d9d6bf89120e6777448b`',
      undefined,
    );
    await queryRunner.query(
      'ALTER TABLE `univdepts` DROP FOREIGN KEY `FK_31b9292ae9b98c9e0d09220d320`',
      undefined,
    );
    await queryRunner.query(
      'ALTER TABLE `univdepts` DROP FOREIGN KEY `FK_b7f8b50c850e8fadc9b5bb1d60b`',
      undefined,
    );
    await queryRunner.query(
      'ALTER TABLE `univdeptsubjects` DROP FOREIGN KEY `FK_d1503011c1f34bb4dfdb5856b63`',
      undefined,
    );
    await queryRunner.query(
      'ALTER TABLE `univdeptsubjects` DROP FOREIGN KEY `FK_f82270fdc6b18b4eb3e4030fd01`',
      undefined,
    );
    await queryRunner.query(
      'ALTER TABLE `subject_details` DROP FOREIGN KEY `FK_40b20eb8d25963003c12f6907a2`',
      undefined,
    );
    await queryRunner.query(
      'DROP INDEX `REL_1cba247d9d6bf89120e6777448` ON `profiles`',
      undefined,
    );
    await queryRunner.query(
      'DROP INDEX `IDX_48f07a756b8f321aa99b06aee1` ON `profiles`',
      undefined,
    );
    await queryRunner.query('DROP TABLE `profiles`', undefined);
    await queryRunner.query(
      'DROP INDEX `IDX_8681da666ad9699d568b3e9106` ON `departments`',
      undefined,
    );
    await queryRunner.query('DROP TABLE `departments`', undefined);
    await queryRunner.query('DROP TABLE `univdepts`', undefined);
    await queryRunner.query('DROP TABLE `univdeptsubjects`', undefined);
    await queryRunner.query(
      'DROP INDEX `IDX_47a287fe64bd0e1027e603c335` ON `subjects`',
      undefined,
    );
    await queryRunner.query('DROP TABLE `subjects`', undefined);
    await queryRunner.query('DROP TABLE `subject_details`', undefined);
    await queryRunner.query(
      'DROP INDEX `IDX_25b08a78732a663bb35872eaa7` ON `universities`',
      undefined,
    );
    await queryRunner.query('DROP TABLE `universities`', undefined);
  }
}
