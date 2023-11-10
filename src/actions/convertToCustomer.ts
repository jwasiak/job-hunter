import { BaseResource, ActionRequest, ActionResponse, ActionContext, AppError, flat } from 'adminjs'

export const convertToCustomer = async (req: ActionRequest, res: ActionResponse, ctx: ActionContext) => {
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
