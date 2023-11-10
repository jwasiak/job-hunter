import {
  ActionRequest,
  ActionResponse,
  ActionContext,
  flat,
  ActionQueryParameters,
  Filter,
  populator,
  SortSetter,
} from 'adminjs'

const PER_PAGE_LIMIT = 500

export const deadProspects = async (request: ActionRequest, response: ActionResponse, context: ActionContext) => {
  // const Prospects = await Prospect.find()
  // return {
  //   Prospects,
  // }
  const { query } = request
  const { sortBy, direction, filters = {} } = flat.unflatten(query || {}) as ActionQueryParameters
  const { resource, _admin } = context
  let { page, perPage } = flat.unflatten(query || {}) as ActionQueryParameters

  if (perPage) {
    perPage = +perPage > PER_PAGE_LIMIT ? PER_PAGE_LIMIT : +perPage
  } else {
    perPage = _admin.options.settings?.defaultPerPage ?? 10
  }
  page = Number(page) || 1

  const listProperties = resource.decorate().getListProperties()
  const firstProperty = listProperties.find(p => p.isSortable())
  let sort
  if (firstProperty) {
    sort = SortSetter({ sortBy, direction }, firstProperty.name(), resource.decorate().options)
  }

  const filter = await new Filter(filters, resource).populate(context)

  const { currentAdmin } = context
  const records = await resource.find(
    filter,
    {
      limit: perPage,
      offset: (page - 1) * perPage,
      sort,
    },
    context
  )
  const populatedRecords = await populator(records, context)

  // eslint-disable-next-line no-param-reassign
  context.records = populatedRecords

  const total = await resource.count(filter, context)
  return {
    meta: {
      total,
      perPage,
      page,
      direction: sort?.direction,
      sortBy: sort?.sortBy,
    },
    records: populatedRecords.map(r => r.toJSON(currentAdmin)),
  }
}
