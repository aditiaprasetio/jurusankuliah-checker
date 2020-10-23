import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddTableSubjectLike1602908535934 implements MigrationInterface {
  name = 'AddTableSubjectLike1602908535934';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE `subject_likes` (`id` varchar(255) NOT NULL, `created_at` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6), `subject_id` varchar(255) NOT NULL, `order` int NOT NULL, `created_by_id` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB',
      undefined,
    );
    await queryRunner.query(
      'ALTER TABLE `subject_likes` ADD CONSTRAINT `FK_873acf7566481ca122f4327cf18` FOREIGN KEY (`created_by_id`) REFERENCES `profiles`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION',
      undefined,
    );
    await queryRunner.query(
      'ALTER TABLE `subject_likes` ADD CONSTRAINT `FK_f8e87456a6dfcbe303c20b090d5` FOREIGN KEY (`subject_id`) REFERENCES `subjects`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION',
      undefined,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE `subject_likes` DROP FOREIGN KEY `FK_f8e87456a6dfcbe303c20b090d5`',
      undefined,
    );
    await queryRunner.query(
      'ALTER TABLE `subject_likes` DROP FOREIGN KEY `FK_873acf7566481ca122f4327cf18`',
      undefined,
    );
    await queryRunner.query('DROP TABLE `subject_likes`', undefined);
  }
}
