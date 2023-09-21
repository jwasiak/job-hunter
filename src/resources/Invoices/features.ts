import loggerFeature from '@adminjs/logger'
import { ResourceWithOptions } from 'adminjs'
import { AppComponentLoader } from '../../AppComponentLoader.js'

export const features: ResourceWithOptions['features'] = [
  loggerFeature({
    componentLoader: AppComponentLoader,
  }),
]
