import { DataSource } from 'typeorm'
export const AppDataSource = (entities: ConstructorParameters<typeof DataSource>[0]['entities']) =>
  new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST ?? 'localhost',
    port: process.env.DB_PORT ? +process.env.DB_PORT : 5432,
    username: process.env.DB_USER ?? 'postgres',
    password: process.env.DB_PASS ?? 'postgres',
    database: process.env.DB_NAME,
    synchronize: process.env.NODE_ENV === 'production' ? false : true,
    logging: process.env.NODE_ENV === 'production' ? false : true,
    entities,
    subscribers: [],
    migrations: [],
  })
