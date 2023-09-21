import argon from 'argon2'
import PostgresSession from 'connect-pg-simple'
import session from 'express-session'
import Pool from 'pg-pool'
import { User } from './entities/User.js'

const pgConfig = {
  user: process.env.DB_USER ?? 'postgres',
  password: process.env.DB_PASS ?? 'postgres',
  host: process.env.DB_HOST ?? 'localhost',
  port: process.env.DB_PORT ? +process.env.DB_PORT : 5432,
  database: process.env.DB_NAME,
  ssl: false,
}
const PostgresStore = PostgresSession(session)

const pool = new Pool(pgConfig)

export const sessionStore = new PostgresStore({
  pool,
  tableName: 'sessions',
  createTableIfMissing: true,
})

export const authenticate = async (login: string, password: string) => {
  const loggedUser = await User.findOne({
    where: { login, active: true },
  })

  if (loggedUser?.password) {
    const matched = await argon.verify(loggedUser.password, password)
    if (matched) {
      return loggedUser
    }
  }
  return null
}
