import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitDB1588731975397 implements MigrationInterface {
    name = 'InitDB1588731975397';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE TABLE `accounts` (`id` varchar(255) NOT NULL, `created_at` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6), `username` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, `phone_number` varchar(255) NULL, `first_name` varchar(255) NOT NULL, `last_name` varchar(255) NULL, `gender` varchar(255) NULL, `roles` text NULL, `created_by_id` varchar(255) NULL, `meta_created_by` json NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB', undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('DROP TABLE `accounts`', undefined);
    }

}
