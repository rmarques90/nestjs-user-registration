import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateUserTable1599366819420 implements MigrationInterface {
    name = 'CreateUserTable1599366819420'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `user` (`id` int NOT NULL AUTO_INCREMENT, `firstName` varchar(255) NOT NULL, `middleName` varchar(255) NOT NULL, `lastName` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, `isActive` tinyint NOT NULL DEFAULT 1, `dateCreated` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `dateUpdated` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `user`");
    }

}
