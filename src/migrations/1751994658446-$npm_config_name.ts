import { MigrationInterface, QueryRunner } from "typeorm";

export class  $npmConfigName1751994658446 implements MigrationInterface {
    name = ' $npmConfigName1751994658446'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "articles" ALTER COLUMN "description" SET DEFAULT ''`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "articles" ALTER COLUMN "description" DROP DEFAULT`);
    }

}
