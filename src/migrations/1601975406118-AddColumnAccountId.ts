import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddColumnAccountId1601975406118 implements MigrationInterface {
  name = 'AddColumnAccountId1601975406118';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE `profiles` ADD `account_id` varchar(255) NOT NULL',
      undefined,
    );
    await queryRunner.query(
      'ALTER TABLE `profiles` ADD UNIQUE INDEX `IDX_48f07a756b8f321aa99b06aee1` (`account_id`)',
      undefined,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE `profiles` DROP INDEX `IDX_48f07a756b8f321aa99b06aee1`',
      undefined,
    );
    await queryRunner.query(
      'ALTER TABLE `profiles` DROP COLUMN `account_id`',
      undefined,
    );
  }
}
