import { ActionRequest } from 'adminjs'

export const filterConvertedProspects = (req: ActionRequest): ActionRequest => {
  req.query = req.query || {}
  req.query['filters.isCustomer'] = false
  return req
}
