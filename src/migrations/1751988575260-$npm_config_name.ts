import { MigrationInterface, QueryRunner } from "typeorm";

export class  $npmConfigName1751988575260 implements MigrationInterface {
    name = ' $npmConfigName1751988575260'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "articles" ("id" SERIAL NOT NULL, "slug" character varying NOT NULL, "description" character varying NOT NULL, "body" character varying NOT NULL, "title" character varying NOT NULL, "tagList" text NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "favorited" boolean NOT NULL DEFAULT false, "favoritesCount" integer NOT NULL DEFAULT '0', CONSTRAINT "PK_0a6e2c450d83e0b6052c2793334" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "articles"`);
    }

}
