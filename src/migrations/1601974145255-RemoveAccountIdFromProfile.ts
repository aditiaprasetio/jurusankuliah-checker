import { MigrationInterface, QueryRunner } from 'typeorm';

export class RemoveAccountIdFromProfile1601974145255
  implements MigrationInterface {
  name = 'RemoveAccountIdFromProfile1601974145255';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'DROP INDEX `IDX_48f07a756b8f321aa99b06aee1` ON `profiles`',
      undefined,
    );
    await queryRunner.query(
      'DROP INDEX `IDX_3955d6e65b06c1cad4f58dfc11` ON `profiles`',
      undefined,
    );
    await queryRunner.query(
      'DROP INDEX `IDX_6214cb4735dd3636095e3aadae` ON `profiles`',
      undefined,
    );
    await queryRunner.query(
      'ALTER TABLE `profiles` DROP COLUMN `account_id`',
      undefined,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE `profiles` ADD `account_id` varchar(255) NOT NULL',
      undefined,
    );
    await queryRunner.query(
      'CREATE UNIQUE INDEX `IDX_6214cb4735dd3636095e3aadae` ON `profiles` (`wantDepartmentId`)',
      undefined,
    );
    await queryRunner.query(
      'CREATE UNIQUE INDEX `IDX_3955d6e65b06c1cad4f58dfc11` ON `profiles` (`departmentId`)',
      undefined,
    );
    await queryRunner.query(
      'CREATE UNIQUE INDEX `IDX_48f07a756b8f321aa99b06aee1` ON `profiles` (`account_id`)',
      undefined,
    );
  }
}
