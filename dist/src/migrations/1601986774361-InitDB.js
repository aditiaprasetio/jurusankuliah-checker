"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class InitDB1601986774361 {
    constructor() {
        this.name = 'InitDB1601986774361';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query('CREATE TABLE `universities` (`id` varchar(255) NOT NULL, `created_at` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6), `name` varchar(255) NOT NULL, `description` text NULL, `url` text NULL, `address` text NULL, `created_by_id` varchar(255) NULL, `meta_created_by` json NULL, UNIQUE INDEX `IDX_25b08a78732a663bb35872eaa7` (`name`), PRIMARY KEY (`id`)) ENGINE=InnoDB', undefined);
            yield queryRunner.query('CREATE TABLE `subject_details` (`id` varchar(255) NOT NULL, `created_at` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6), `subject_id` varchar(255) NOT NULL, `hafalan` float NOT NULL, `analisis` float NOT NULL, `created_by_id` varchar(255) NULL, `meta_created_by` json NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB', undefined);
            yield queryRunner.query('CREATE TABLE `subjects` (`id` varchar(255) NOT NULL, `created_at` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6), `name` varchar(255) NOT NULL, `description` text NULL, `type` varchar(255) NULL, `created_by_id` varchar(255) NULL, `meta_created_by` json NULL, UNIQUE INDEX `IDX_47a287fe64bd0e1027e603c335` (`name`), PRIMARY KEY (`id`)) ENGINE=InnoDB', undefined);
            yield queryRunner.query('CREATE TABLE `deptfamily_subjects` (`id` varchar(255) NOT NULL, `created_at` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6), `departmentfamily_id` varchar(255) NOT NULL, `subject_id` varchar(255) NOT NULL, `important_value` float NULL, `created_by_id` varchar(255) NULL, `meta_created_by` json NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB', undefined);
            yield queryRunner.query('CREATE TABLE `department_families` (`id` varchar(255) NOT NULL, `created_at` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6), `name` varchar(255) NOT NULL, `description` text NULL, `type` varchar(255) NULL, `created_by_id` varchar(255) NULL, `meta_created_by` json NULL, UNIQUE INDEX `IDX_7472b240cd145382ce6c12aef8` (`name`), PRIMARY KEY (`id`)) ENGINE=InnoDB', undefined);
            yield queryRunner.query('CREATE TABLE `profiles` (`id` varchar(255) NOT NULL, `created_at` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6), `account_id` varchar(255) NOT NULL, `current_status` varchar(255) NULL, `department_id` varchar(255) NULL, `want_department_id` varchar(255) NULL, UNIQUE INDEX `IDX_48f07a756b8f321aa99b06aee1` (`account_id`), PRIMARY KEY (`id`)) ENGINE=InnoDB', undefined);
            yield queryRunner.query('CREATE TABLE `departments` (`id` varchar(255) NOT NULL, `created_at` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6), `name` varchar(255) NOT NULL, `description` text NULL, `type` varchar(255) NULL, `url` text NULL, `university_id` varchar(255) NOT NULL, `created_by_id` varchar(255) NULL, `department_family_id` varchar(255) NULL, `meta_created_by` json NULL, UNIQUE INDEX `IDX_8681da666ad9699d568b3e9106` (`name`), PRIMARY KEY (`id`)) ENGINE=InnoDB', undefined);
            yield queryRunner.query('ALTER TABLE `subject_details` ADD CONSTRAINT `FK_40b20eb8d25963003c12f6907a2` FOREIGN KEY (`subject_id`) REFERENCES `subjects`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION', undefined);
            yield queryRunner.query('ALTER TABLE `deptfamily_subjects` ADD CONSTRAINT `FK_b3458ae10f54a9c97cd2b528a27` FOREIGN KEY (`departmentfamily_id`) REFERENCES `department_families`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION', undefined);
            yield queryRunner.query('ALTER TABLE `deptfamily_subjects` ADD CONSTRAINT `FK_ed7b77d1f1fa92e9ecdb4759d91` FOREIGN KEY (`subject_id`) REFERENCES `subjects`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION', undefined);
            yield queryRunner.query('ALTER TABLE `profiles` ADD CONSTRAINT `FK_ea1b130268f67384841db2040c2` FOREIGN KEY (`department_id`) REFERENCES `departments`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION', undefined);
            yield queryRunner.query('ALTER TABLE `profiles` ADD CONSTRAINT `FK_f77f5e6dc28cf62090b0038d9a0` FOREIGN KEY (`want_department_id`) REFERENCES `departments`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION', undefined);
            yield queryRunner.query('ALTER TABLE `departments` ADD CONSTRAINT `FK_85dfd120ea18b8c0fb942eacf7b` FOREIGN KEY (`university_id`) REFERENCES `universities`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION', undefined);
            yield queryRunner.query('ALTER TABLE `departments` ADD CONSTRAINT `FK_12be891df39952ce229b86d8509` FOREIGN KEY (`department_family_id`) REFERENCES `department_families`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION', undefined);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query('ALTER TABLE `departments` DROP FOREIGN KEY `FK_12be891df39952ce229b86d8509`', undefined);
            yield queryRunner.query('ALTER TABLE `departments` DROP FOREIGN KEY `FK_85dfd120ea18b8c0fb942eacf7b`', undefined);
            yield queryRunner.query('ALTER TABLE `profiles` DROP FOREIGN KEY `FK_f77f5e6dc28cf62090b0038d9a0`', undefined);
            yield queryRunner.query('ALTER TABLE `profiles` DROP FOREIGN KEY `FK_ea1b130268f67384841db2040c2`', undefined);
            yield queryRunner.query('ALTER TABLE `deptfamily_subjects` DROP FOREIGN KEY `FK_ed7b77d1f1fa92e9ecdb4759d91`', undefined);
            yield queryRunner.query('ALTER TABLE `deptfamily_subjects` DROP FOREIGN KEY `FK_b3458ae10f54a9c97cd2b528a27`', undefined);
            yield queryRunner.query('ALTER TABLE `subject_details` DROP FOREIGN KEY `FK_40b20eb8d25963003c12f6907a2`', undefined);
            yield queryRunner.query('DROP INDEX `IDX_8681da666ad9699d568b3e9106` ON `departments`', undefined);
            yield queryRunner.query('DROP TABLE `departments`', undefined);
            yield queryRunner.query('DROP INDEX `IDX_48f07a756b8f321aa99b06aee1` ON `profiles`', undefined);
            yield queryRunner.query('DROP TABLE `profiles`', undefined);
            yield queryRunner.query('DROP INDEX `IDX_7472b240cd145382ce6c12aef8` ON `department_families`', undefined);
            yield queryRunner.query('DROP TABLE `department_families`', undefined);
            yield queryRunner.query('DROP TABLE `deptfamily_subjects`', undefined);
            yield queryRunner.query('DROP INDEX `IDX_47a287fe64bd0e1027e603c335` ON `subjects`', undefined);
            yield queryRunner.query('DROP TABLE `subjects`', undefined);
            yield queryRunner.query('DROP TABLE `subject_details`', undefined);
            yield queryRunner.query('DROP INDEX `IDX_25b08a78732a663bb35872eaa7` ON `universities`', undefined);
            yield queryRunner.query('DROP TABLE `universities`', undefined);
        });
    }
}
exports.InitDB1601986774361 = InitDB1601986774361;
//# sourceMappingURL=1601986774361-InitDB.js.map