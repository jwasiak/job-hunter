import { ResourceWithOptions } from 'adminjs'
import { createLoggerResource } from '@adminjs/logger'
import { AppComponentLoader } from '../AppComponentLoader.js'
import { Log } from '../entities/Log.js'
import { menu } from '../menu.js'

export const LogsResource: ResourceWithOptions = createLoggerResource({
  componentLoader: AppComponentLoader,
  resource: Log,
  featureOptions: {
    componentLoader: AppComponentLoader,
    resourceOptions: {
      navigation: menu.app,
    },
  },
})
