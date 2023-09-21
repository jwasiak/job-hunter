import loggerFeature from '@adminjs/logger'
import { ResourceWithOptions } from 'adminjs'
import { AppComponentLoader } from '../AppComponentLoader.js'
import { Business } from '../entities/Business.js'
import { menu } from '../menu.js'

export const BusinessResource: ResourceWithOptions = {
  resource: Business,
  options: {
    navigation: menu.settings,
    listProperties: ['id', 'name'],
    showProperties: ['id', 'name'],
    actions: {
      list: {
        showFilter: false,
        before: req => {
          req.query = req.query || {}
          req.query.perPage = 500
          return req
        },
      },
      show: {
        isAccessible: false,
      },
      edit: {
        showInDrawer: true,
      },
      delete: {
        isAccessible: false,
      },
      bulkDelete: {
        isAccessible: false,
      },
    },
  },
  features: [
    loggerFeature({
      componentLoader: AppComponentLoader,
    }),
  ],
}
