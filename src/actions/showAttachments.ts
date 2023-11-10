import { BaseResource, ActionRequest, ActionResponse, ActionContext, BaseRecord, AppError } from 'adminjs'

export const showAttachments = async (req: ActionRequest, res: ActionResponse, ctx: ActionContext) => {
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
