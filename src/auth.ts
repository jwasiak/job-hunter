import { fileURLToPath } from 'node:url'
import argon from 'argon2'
import sqlite3 from 'sqlite3'
import session from 'express-session'
import sqliteStoreFactory from 'express-session-sqlite'
import { User } from './entities/User.js'

const dbDir = fileURLToPath(new URL('../db/', import.meta.url))

const dbConfig = {
  driver: sqlite3.Database,
  path: dbDir + 'job-hunter.db',
  ttl: 86400000,
  prefix: 'sess:',
  cleanupInterval: 300000,
}

const SqliteStore = sqliteStoreFactory.default(session)

export const sessionStore = new SqliteStore(dbConfig)

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
