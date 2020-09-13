import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddForgotPasswordToken1589900268802 implements MigrationInterface {
  name = 'AddForgotPasswordToken1589900268802';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE `accounts` ADD `forgot_password_token` varchar(255) NULL',
      undefined,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE `accounts` DROP COLUMN `forgot_password_token`',
      undefined,
    );
  }
}
