import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddColumnPhoto1589438295339 implements MigrationInterface {
  name = 'AddColumnPhoto1589438295339';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE `accounts` ADD `photo_url` text NULL',
      undefined,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE `accounts` DROP COLUMN `photo_url`',
      undefined,
    );
  }
}
