import {
  ResourceOptions,
  BaseResource,
  ActionRequest,
  ActionResponse,
  ActionContext,
  BaseRecord,
  AppError,
  flat,
  ValidationError,
} from 'adminjs'

import { InvoiceItem } from '../../entities/InvoiceItems.js'
import { Payment } from '../../entities/Payments.js'
import layout from './layout.js'

const beforeHandler = (req: ActionRequest): ActionRequest => {
  if (req.method !== 'post') return req

  const payload = flat.unflatten(req.payload)
  let invoiceValue = 0
  let paid = 0
  if (payload.items) {
    const items = payload.items.map((item: InvoiceItem) => {
      const { price = 0, quantity = 1 } = item
      item.value = price * quantity
      invoiceValue += item.value
      return item
    })
    payload.items = items
    payload.invoiceValue = invoiceValue
  }
  if (payload.payments) {
    paid = payload.payments.reduce((acc: number, payment: Payment) => acc + Number(payment.value), 0)
    payload.paid = paid
  }
  if (invoiceValue <= paid) {
    payload.isPaid = true
  }
  req.payload = payload
  return req
}

export const actions: ResourceOptions['actions'] = {
  new: {
    before: beforeHandler,
    layout: layout.new,
  },
  edit: {
    before: beforeHandler,
    layout: layout.edit,
  },
  show: {
    layout: layout.show,
  },
  bulkDelete: {
    isAccessible: false,
  },
}
