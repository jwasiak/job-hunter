import { ResourceWithOptions } from 'adminjs'
import { menu } from '../../menu.js'
import { actions } from './actions.js'
import { features } from './features.js'
import { Components } from '../../AppComponentLoader.js'

import { Customer } from '../../entities/Customer.js'

export const CustomersResource: ResourceWithOptions = {
  resource: Customer,
  options: {
    navigation: menu.app,
    listProperties: ['company', 'statusCode', 'nextActivityDate', 'totalSales', 'totalBalance', 'counter'],
    sort: {
      direction: 'desc',
      sortBy: 'updatedAt',
    },
    actions,
    properties: {
      id: {
        isVisible: false,
      },
      company: {
        isTitle: true,
        isRequired: true,
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
      statusCode: {
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
      },
      'activities.type': { type: 'reference', reference: 'ActivityType' },
      'activities.title': { type: 'string' },
      'activities.comment': { type: 'textarea' },
      nextActivityDate: {
        type: 'date',
      },
      invoices: {
        components: {
          edit: Components.Invoices,
          show: Components.Invoices,
        },
      },
      totalSales: { type: 'currency' },
      totalBalance: { type: 'currency' },
      counter: {
        components: {
          list: Components.ListCounter,
        },
      },
    },
  },
  features,
}
