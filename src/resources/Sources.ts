import loggerFeature from '@adminjs/logger'
import { ResourceWithOptions } from 'adminjs'
import { AppComponentLoader } from '../AppComponentLoader.js'
import { Source } from '../entities/Source.js'
import { menu } from '../menu.js'

export const SourcesResource: ResourceWithOptions = {
  resource: Source,
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
      // search: { isVisible: false },
      show: {
        isVisible: false,
      },
      edit: {
        showInDrawer: true,
      },
      delete: {
        isAccessible: true,
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
