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

const convertToProspect = async (req: ActionRequest, res: ActionResponse, ctx: ActionContext) => {
  const { resource, record, currentAdmin, _admin, h } = ctx
  if (record?.params.prospectId) {
    throw new AppError('Prospect already exists')
  }
  const systemMessage = {
    date: new Date(),
    title: 'Prospect created from contact',
  }
  const _record = flat.unflatten(record?.params)
  // if (_record.activities) {
  //   _record.activities.push(systemMessage)
  // } else {
  //   _record.activities = [systemMessage]
  // }
  _record.notes = [systemMessage]
  const Prospect: BaseResource = _admin.findResource('Prospect')
  const prospectRecord = await Prospect.create(_record)
  const prospectBaseRecord = Prospect.build(prospectRecord)
  const prospectId = prospectBaseRecord.params.id
  await resource.update(record?.params.id, {
    ...record?.params,
    prospectId,
    isProspect: true,
  })
  const url = h.recordActionUrl({
    resourceId: 'Prospect',
    actionName: 'show',
    recordId: prospectId,
  })
  return {
    record: prospectBaseRecord?.toJSON(currentAdmin),
    redirectUrl: url,
    notice: {
      type: 'success',
      message: 'Contact successfuly converted to prospect',
    },
  }
}

const filterConvertedContacts = (req: ActionRequest): ActionRequest => {
  req.query = req.query || {}
  req.query['filters.isProspect'] = false
  return req
}

export const actions: ResourceOptions['actions'] = {
  list: {
    before: filterConvertedContacts,
  },
  new: {
    layout: layout.new,
  },
  edit: {
    layout: layout.edit,
    // component: Components.JmwComponent,
  },
  show: {
    layout: layout.show,
  },
  attachments: {
    actionType: 'record',
    variant: 'info',
    icon: 'Paperclip',
    component: false,
    handler: showAttachments,
  },
  convert: {
    actionType: 'record',
    variant: 'secondary',
    icon: 'Send',
    guard: 'Are you sure to convert this contact into prospect',
    component: false,
    handler: convertToProspect,
  },
}
