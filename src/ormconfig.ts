import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
const config: PostgresConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'dev',
  password: 'dev',
  database: 'blog',
  synchronize: true,
  entities: [__dirname + '/**/*.entity{.ts,.js}'], // or explicitly Tag
};

export default config;
