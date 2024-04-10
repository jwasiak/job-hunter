let knexConfig
if (process.env.DB_CLIENT === 'better-sqlite3') {
  knexConfig = {
    client: process.env.DB_CLIENT,
    connection: {
      filename: './db/job-hunter.db',
    },
    useNullAsDefault: true
  }
}

if (process.env.DB_CLIENT === 'postgres') {
  knexConfig = {
    client: process.env.DB_CLIENT,
    connection: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME
    }
  }
}

export default knexConfig