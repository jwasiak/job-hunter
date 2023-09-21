import loggerFeature from '@adminjs/logger'
import { ResourceWithOptions } from 'adminjs'
import { AppComponentLoader, Components } from '../AppComponentLoader.js'
import { Link } from '../entities/Link.js'
import { menu } from '../menu.js'

export const LinksResource: ResourceWithOptions = {
  resource: Link,
  options: {
    navigation: menu.app,
    listProperties: ['url', 'description', 'category'],
    filterProperties: ['url', 'description', 'category'],
    showProperties: ['id', 'url', 'description', 'category'],
    actions: {
      bulkDelete: {
        isAccessible: false,
      },
    },
    properties: {
      url: {
        isTitle: true,
        isRequired: true,
        components: {
          list: Components.ListLink,
          show: Components.ShowLink,
        },
      },
      description: {
        type: 'textarea',
      },
    },
  },
  features: [
    loggerFeature({
      componentLoader: AppComponentLoader,
    }),
  ],
}
