import loggerFeature from '@adminjs/logger'
import { ResourceWithOptions, ActionRequest } from 'adminjs'
import { AppComponentLoader } from '../AppComponentLoader.js'
import { ActivityType } from '../entities/ActivityType.js'
import { menu } from '../menu.js'

const filterInactive = (req: ActionRequest): ActionRequest => {
  req.query = req.query || {}
  req.query['filters.isActive'] = true
  return req
}

export const ActivityTypeResource: ResourceWithOptions = {
  resource: ActivityType,
  options: {
    navigation: menu.settings,
    sort: {
      direction: 'asc',
      sortBy: 'code',
    },
    actions: {
      search: {
        before: filterInactive,
      },
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
      // delete: {
      //   isAccessible: false,
      // },
      bulkDelete: {
        isAccessible: false,
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
      },
      isActive: {
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
