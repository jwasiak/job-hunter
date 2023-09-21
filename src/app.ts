import { fileURLToPath } from 'node:url'
import { Database, Resource } from '@adminjs/typeorm'
import AdminJS from 'adminjs'
import 'dotenv/config'
import express from 'express'
import { AppDataSource } from './AppDataSource.js'
import { AdminConfig } from './config.js'
import {
  SourcesResource,
  UsersResource,
  ContactsResource,
  CompanyStatusResource,
  ActivityTypeResource,
  BusinessResource,
  AttachmentsResource,
  TemplatesResource,
  ProspectsResource,
  LogsResource,
  CustomersResource,
  InvoicesResource,
  LinksResource,
} from './resources/index.js'

import { getAdminRouter } from './router.js'

AdminJS.registerAdapter({ Database, Resource })

const dirname = fileURLToPath(new URL('.', import.meta.url))

const resources = [
  ContactsResource,
  ProspectsResource,
  CustomersResource,
  AttachmentsResource,
  InvoicesResource,
  LinksResource,
  TemplatesResource,
  LogsResource,
  CompanyStatusResource,
  SourcesResource,
  UsersResource,
  ActivityTypeResource,
  BusinessResource,
]

const start = async (): Promise<void> => {
  await AppDataSource(resources.map(r => r.resource)).initialize()

  const app = express()

  app.use(express.static(`${dirname}/../public`))

  const admin = new AdminJS({ ...AdminConfig, resources })

  const router = getAdminRouter(admin)

  app.use(admin.options.rootPath, router)

  app.listen(+process.env.PORT!, process.env.HOSTNAME!, () => {
    const url = `http://${process.env.HOSTNAME}:${process.env.PORT}${admin.options.rootPath}`
    console.log(`Job Hunter app started on ${url}`)
  })

  if (app.get('env') === 'production') {
    admin.initialize()
  } else {
    admin.watch()
  }
}

start()
