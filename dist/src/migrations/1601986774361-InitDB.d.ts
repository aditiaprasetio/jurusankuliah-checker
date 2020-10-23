import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class InitDB1601986774361 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
