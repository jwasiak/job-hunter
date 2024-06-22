import {
  // ResourceOptions,
  // BaseResource,
  ActionRequest,
  // ActionResponse,
  ActionContext,
  // BaseRecord,
  // AppError,
  flat,
} from 'adminjs'

export const setDefaultValues = (req: ActionRequest, ctx: ActionContext) => {
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
  req.payload = updatedPayload
  return req
}
