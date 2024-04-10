import AdminJS from 'adminjs'
import AdminJSExpress from '@adminjs/express'
import { authenticate, sessionStore } from './auth.js'

export const getAdminRouter = (admin: AdminJS) => {
  if (process.env.AUTHENTICATE === '0') {
    return AdminJSExpress.buildRouter(admin)
  }
  const router = AdminJSExpress.buildAuthenticatedRouter(
    admin,
    {
      authenticate,
      cookieName: 'adminjs',
      cookiePassword: process.env.SESSION_SECRET || 'super_secret',
    },
    null,
    {
      secret: process.env.SESSION_SECRET || 'super_secret',
      saveUninitialized: false,
      resave: true,
      store: sessionStore,
    }
  )

  return router
}
