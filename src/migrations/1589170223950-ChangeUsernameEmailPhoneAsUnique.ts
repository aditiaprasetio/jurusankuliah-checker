import { MigrationInterface, QueryRunner } from 'typeorm';

export class ChangeUsernameEmailPhoneAsUnique1589170223950
  implements MigrationInterface {
  name = 'ChangeUsernameEmailPhoneAsUnique1589170223950';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE `accounts` ADD UNIQUE INDEX `IDX_477e3187cedfb5a3ac121e899c` (`username`)',
      undefined,
    );
    await queryRunner.query(
      'ALTER TABLE `accounts` ADD UNIQUE INDEX `IDX_ee66de6cdc53993296d1ceb8aa` (`email`)',
      undefined,
    );
    await queryRunner.query(
      'ALTER TABLE `accounts` ADD UNIQUE INDEX `IDX_31719ad17bc34678f49decea7d` (`phone_number`)',
      undefined,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE `accounts` DROP INDEX `IDX_31719ad17bc34678f49decea7d`',
      undefined,
    );
    await queryRunner.query(
      'ALTER TABLE `accounts` DROP INDEX `IDX_ee66de6cdc53993296d1ceb8aa`',
      undefined,
    );
    await queryRunner.query(
      'ALTER TABLE `accounts` DROP INDEX `IDX_477e3187cedfb5a3ac121e899c`',
      undefined,
    );
  }
}
