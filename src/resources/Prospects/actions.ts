import {
  ResourceOptions,
  BaseResource,
  // ActionHandler,
  ActionRequest,
  ActionResponse,
  ActionContext,
  BaseRecord,
  AppError,
  flat,
} from 'adminjs'
// import { Components } from '../../AppComponentLoader.js'
import layout from './layout.js'
// import { Prospect } from '../../entities/Prospect.js'

const filterConvertedProspects = (req: ActionRequest): ActionRequest => {
  req.query = req.query || {}
  req.query['filters.isCustomer'] = false
  return req
}

const setDefaultValues = (req: ActionRequest, ctx: ActionContext) => {
  const { action } = ctx
  const { payload = {}, method } = req
  if (method !== 'post') return req

  const today = new Date()
  const defaults = action.custom()
  const updatedPayload = flat.unflatten(payload)
  if (defaults.statusCode) {
    updatedPayload.statusCode = defaults.statusCode
  }
  if (updatedPayload.notes?.length) {
    updatedPayload.notes[0].date = today
  }
  if (updatedPayload.activities?.length === 1) {
    updatedPayload.activities[0].date = today
  }
  if (defaults.activityCode && (updatedPayload.activities === undefined || updatedPayload.activities?.length === 0)) {
    updatedPayload.activities = []
    const activity = {
      date: today,
      type: defaults.activityCode || null,
      title: defaults.activityTitle || null,
    }
    updatedPayload.activities.push(activity)
  }

  const nextActivityDate = new Date()
  nextActivityDate.setDate(today.getDate() + 30)
  if (defaults.nextActivityCode) {
    updatedPayload.nextActivityDate = nextActivityDate
    updatedPayload.nextActivityCode = defaults.nextActivityCode
  }
  // req.payload = flat.flatten(updatedPayload)
  req.payload = updatedPayload
  console.log(updatedPayload)
  return req
}

const showAttachments = async (req: ActionRequest, res: ActionResponse, ctx: ActionContext) => {
  const { resource, record, currentAdmin, _admin, h } = ctx
  const Attachments: BaseResource = _admin.findResource('Attachments')
  let attachmentsBaseRecord: BaseRecord | null
  let attachmentsId = record?.params.attachmentsId

  if (attachmentsId) {
    attachmentsBaseRecord = await Attachments.findOne(attachmentsId)
  } else {
    const attachmentsRecord = await Attachments.create({
      company: record?.params.company,
    })
    attachmentsId = attachmentsRecord.id
    attachmentsBaseRecord = Attachments.build(attachmentsRecord)

    await resource.update(record?.params.id, {
      ...record?.params,
      attachmentsId,
    })
  }
  if (!attachmentsBaseRecord) {
    throw new AppError('Attachments record error')
  }
  const url = h.recordActionUrl({
    resourceId: 'Attachments',
    actionName: 'show',
    recordId: attachmentsId,
  })
  return {
    record: attachmentsBaseRecord?.toJSON(currentAdmin),
    redirectUrl: url,
  }
}

const convertToCustomerHandler = async (req: ActionRequest, res: ActionResponse, ctx: ActionContext) => {
  const { resource, record, currentAdmin, _admin, h } = ctx
  if (record?.params.customerId) {
    throw new AppError('Customer already exists')
  }
  const systemMessage = {
    date: new Date(),
    title: 'Customer created from prospect',
  }
  const notes = flat.get(record?.params, 'notes')
  notes.push(systemMessage)
  const Customer: BaseResource = _admin.findResource('Customer')
  const customerRecord = await Customer.create({ ...record?.params, notes })
  const customerBaseRecord = Customer.build(customerRecord)
  const customerId = customerBaseRecord.params.id
  await resource.update(record?.params.id, {
    ...record?.params,
    customerId,
    isCustomer: true,
  })
  const url = h.recordActionUrl({
    resourceId: 'Customer',
    actionName: 'show',
    recordId: customerId,
  })
  return {
    record: customerBaseRecord?.toJSON(currentAdmin),
    redirectUrl: url,
    notice: {
      type: 'success',
      message: 'Contact successfuly converted to prospect',
    },
  }
}

export const actions: ResourceOptions['actions'] = {
  list: {
    before: filterConvertedProspects,
  },
  // DoSomething: {
  //   actionType: 'resource',
  //   component: Components.JmwComponent,
  //   handler: async (request: ActionRequest, response: ActionResponse, context: ActionContext) => {
  //     const Prospects = await Prospect.find()
  //     return {
  //       Prospects,
  //     }
  //   },
  // },
  new: {
    layout: layout.new,
    before: [setDefaultValues],
    custom: {
      statusCode: 'ENTERED',
      activityCode: 'FORM',
      activityTitle: 'Zgłoszenie',
      nextActivityCode: 'DECISION',
      nextActivityDay: 30,
    },
  },
  edit: {
    layout: layout.edit,
  },
  show: {
    layout: layout.show,
  },
  attachments: {
    actionType: 'record',
    icon: 'Paperclip',
    variant: 'info',
    component: false,
    handler: showAttachments,
  },
  convert: {
    actionType: 'record',
    icon: 'Send',
    variant: 'secondary',
    guard: 'Are yo sure to convert this prospect into customer',
    component: false,
    handler: convertToCustomerHandler,
  },
  bulkDelete: {
    isAccessible: false,
  },
}
