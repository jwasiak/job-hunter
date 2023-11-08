import { ResourceWithOptions } from 'adminjs'
import { menu } from '../../menu.js'
import { actions } from './actions.js'
import { features } from './features.js'
import { Components } from '../../AppComponentLoader.js'

import { Prospect } from '../../entities/Prospect.js'

export const ProspectsResource: ResourceWithOptions = {
  resource: Prospect,
  options: {
    navigation: menu.app,
    listProperties: ['company', 'statusCode', 'nextActivityCode', 'nextActivityDate', 'counter'],
    filterProperties: ['company_', 'statusCode', 'nextActivityCode', 'nextActivityDate', 'sourceId', 'businessId'],
    sort: {
      direction: 'desc',
      sortBy: 'updatedAt',
    },
    actions,
    properties: {
      id: {
        isVisible: false,
      },
      // isProspect: {
      //   isVisible: false,
      // },
      company: {
        isTitle: true,
        isRequired: true,
      },
      phone: {
        type: 'string',
      },
      email: {
        components: {
          show: Components.ShowMailTo,
        },
      },
      url: {
        components: {
          show: Components.ShowLink,
        },
      },
      info: {
        // hideLabel: true,
        type: 'textarea',
        props: {
          rows: 2,
        },
      },
      address: {
        type: 'mixed',
        props: {
          dataCss: 'customer-edit-address',
        },
      },
      'address.postalCode': { type: 'string' },
      'address.city': { type: 'string' },
      'address.country': { type: 'string' },
      'address.address': { type: 'string' },
      persons: {
        type: 'mixed',
        isArray: true,
      },
      'persons.name': { type: 'string' },
      'persons.email': {
        type: 'string',
        components: {
          show: Components.ShowMailTo,
        },
      },
      'persons.phone': { type: 'string' },

      notes: {
        type: 'mixed',
        isArray: true,
      },
      'notes.date': { type: 'date' },
      'notes.title': {
        type: 'string',
        components: {
          show: Components.ShowLink,
        },
      },
      'notes.content': { type: 'textarea' },

      activities: {
        type: 'mixed',
        isArray: true,
      },
      'activities.date': {
        type: 'date',
        // props: {
        //   showTimeInput: true,
        //   timeFormat: 'HH:mm',
        // },
      },
      'activities.type': { type: 'reference', reference: 'ActivityType' },
      'activities.title': { type: 'string' },
      'activities.comment': { type: 'textarea' },
      nextActivityDate: {
        type: 'date',
      },
      button: {
        components: {
          show: Components.CustomActionButton,
          edit: Components.CustomActionButton,
        },
      },
      counter: {
        components: {
          list: Components.ListCounter,
        },
      },
      selectTemplateToClipboard: {
        components: {
          edit: Components.SelectTemplateToClipboard,
        },
      },
    },
  },
  features,
}
