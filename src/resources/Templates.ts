import loggerFeature from '@adminjs/logger'
import { ResourceWithOptions } from 'adminjs'
import { AppComponentLoader } from '../AppComponentLoader.js'
import { Template } from '../entities/Template.js'
import { menu } from '../menu.js'

export const TemplatesResource: ResourceWithOptions = {
  resource: Template,
  options: {
    navigation: menu.app,
    listProperties: ['name', 'updatedAt'],
    filterProperties: ['name'],
    actions: {
      bulkDelete: {
        isAccessible: false,
      },
    },
    properties: {
      id: {
        isVisible: false,
      },
      text: {
        type: 'textarea',
        position: 10,
        props: {
          rows: 3,
        },
      },
      html: {
        type: 'richtext',
        position: 20,
      },
    },
  },
  features: [
    loggerFeature({
      componentLoader: AppComponentLoader,
    }),
  ],
}
