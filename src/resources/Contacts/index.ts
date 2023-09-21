import { ResourceWithOptions } from 'adminjs'
import { Components } from '../../AppComponentLoader.js'
import { Contact } from '../../entities/Contact.js'
import { menu } from '../../menu.js'
import { actions } from './actions.js'
import { features } from './features.js'

export const ContactsResource: ResourceWithOptions = {
  resource: Contact,
  options: {
    navigation: menu.app,
    listProperties: ['company', 'statusCode', 'nextActivityCode', 'nextActivityDate', 'counter'],
    filterProperties: ['company', 'statusCode', 'nextActivityCode', 'nextActivityDate'],
    sort: {
      direction: 'desc',
      sortBy: 'updatedAt',
    },
    actions,
    properties: {
      id: {
        isVisible: false,
      },
      isProspect: {
        isVisible: false,
      },
      company: {
        isTitle: true,
        isRequired: true,
      },
      // statusCode: {
      // isRequired: true,
      // type: 'reference',
      // reference: 'CompanyStatus',
      // },
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
        type: 'textarea',
        props: {
          rows: 2,
        },
      },
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

      activities: {
        type: 'mixed',
        isArray: true,
      },
      'activities.date': {
        type: 'date',
      },
      'activities.type': { type: 'reference', reference: 'ActivityType' },
      'activities.title': { type: 'string' },
      'activities.comment': { type: 'textarea' },
      nextActivityDate: {
        type: 'date',
      },
      counter: {
        components: {
          list: Components.ListCounter,
        },
      },
    },
  },
  features,
}
