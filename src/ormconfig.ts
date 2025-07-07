import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { DataSource } from 'typeorm';

const config: PostgresConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'dev',
  password: 'dev',
  database: 'blog',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  migrationsTableName: 'migrations',
  migrations: [__dirname + '/migrations/**/*.ts'],
};

const AppDataSource = new DataSource(config);

export { AppDataSource };
export default config;
