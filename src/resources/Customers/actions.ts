import {
  ResourceOptions,
  BaseResource,
  ActionRequest,
  ActionResponse,
  ActionContext,
  BaseRecord,
  AppError,
} from 'adminjs'
import layout from './layout.js'

const getInvoices = (req: ActionRequest) => {
  const { params } = req
  // console.log(params)
  params.custom = 'JMW'
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

export const actions: ResourceOptions['actions'] = {
  new: {
    layout: layout.new,
  },
  edit: {
    // before: getInvoices,
    layout: layout.edit,
  },
  show: {
    // before: getInvoices,
    layout: layout.show,
  },
  attachments: {
    actionType: 'record',
    variant: 'info',
    icon: 'Paperclip',
    component: false,
    handler: showAttachments,
  },
  bulkDelete: {
    isAccessible: false,
  },
}
