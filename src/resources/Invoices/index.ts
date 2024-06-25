import { ResourceWithOptions } from 'adminjs'
import { menu } from '../../menu.js'
import { actions } from './actions.js'
import { features } from './features.js'
import { Components } from '../../AppComponentLoader.js'
import { Invoice } from '../../entities/Invoice.js'
import { UnitsEnum } from '../../enums/Units.js'
import { PaymentSourcesEnum } from '../../enums/PaymentSources.js'
import { convertEnumToOptions } from '../../utils/transformers.js'

export const InvoicesResource: ResourceWithOptions = {
  resource: Invoice,
  options: {
    navigation: menu.app,
    listProperties: ['invoiceDate', 'invoiceNo', 'customerId', 'invoiceValue', 'paid', 'balance'],
    filterProperties: ['invoiceNo', 'customerId', 'invoiceDate'],
    sort: {
      direction: 'desc',
      sortBy: 'invoiceDate',
    },
    actions,
    properties: {
      invoiceNo: { isTitle: true, isRequired: true },
      customerId: { isRequired: true },
      items: { type: 'mixed', isArray: true },
      note: { type: 'textarea' },

      'items.name': { type: 'string' },
      'items.quantity': { type: 'number' },
      'items.unit': { availableValues: convertEnumToOptions(UnitsEnum) },
      'items.price': { type: 'number' },
      'items.value': { type: 'currency', props: { readonly: 'readonly' } },

      payments: { type: 'mixed', isArray: true },

      'payments.date': { type: 'date' },
      'payments.source': { availableValues: convertEnumToOptions(PaymentSourcesEnum) },
      'payments.value': { type: 'number' },

      isPaid: { isVisible: false },
      paid: {
        type: 'currency',
        components: {
          list: Components.FormatedCurrency,
        },
        props: { readOnly: 'readonly' },
      },

      invoiceDate: { type: 'date', isRequired: true },
      dueDate: { type: 'date', isRequired: true },
      invoiceValue: {
        type: 'currency',
        components: {
          list: Components.FormatedCurrency,
        },
        props: { readOnly: 'readonly' },
      },
      balance: {
        type: 'currency',
        components: {
          list: Components.FormatedCurrency,
        },
        props: { readOnly: 'readonly' },
      },
    },
  },
  features,
}
