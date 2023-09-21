import loggerFeature from '@adminjs/logger'
import { ResourceWithOptions } from 'adminjs'
import { AppComponentLoader } from '../AppComponentLoader.js'
import { CompanyStatus } from '../entities/index.js'
import { menu } from '../menu.js'

export const CompanyStatusResource: ResourceWithOptions = {
  resource: CompanyStatus,
  options: {
    navigation: menu.settings,
    sort: {
      direction: 'asc',
      sortBy: 'order',
    },
    actions: {
      list: {
        showFilter: false,
        before: req => {
          req.query = req.query || {}
          req.query.perPage = 500
          return req
        },
      },
      delete: {
        isAccessible: true,
      },
      bulkDelete: {
        isAccessible: false,
      },
      show: {
        isVisible: false,
      },
      edit: {
        showInDrawer: true,
      },
    },
    properties: {
      code: {
        isVisible: true,
        isDisabled: false,
        isId: true,
        isRequired: true,
        position: 10,
        props: {
          pattern: '[_A-Z]*',
        },
      },
      name: {
        isRequired: true,
        position: 20,
        isTitle: true,
      },
      order: {
        position: 30,
      },
    },
  },
  features: [
    loggerFeature({
      componentLoader: AppComponentLoader,
    }),
  ],
}
