import {MigrationInterface, QueryRunner} from "typeorm";

export class ChangeUserTable1599367013376 implements MigrationInterface {
    name = 'ChangeUserTable1599367013376'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `middleName`");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` ADD `middleName` varchar(255) NOT NULL");
    }

}
