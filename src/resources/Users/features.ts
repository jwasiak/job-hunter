import loggerFeature from '@adminjs/logger'
import passwordsFeature from '@adminjs/passwords'
import { ResourceWithOptions } from 'adminjs'
import argon2 from 'argon2'
import { AppComponentLoader } from '../../AppComponentLoader.js'

export const features: ResourceWithOptions['features'] = [
  passwordsFeature({
    componentLoader: AppComponentLoader,
    properties: {
      password: 'newPassword',
      encryptedPassword: 'password',
    },
    hash: argon2.hash,
  }),
  loggerFeature({
    componentLoader: AppComponentLoader,
  }),
]
