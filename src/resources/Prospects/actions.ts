import { ResourceOptions } from 'adminjs'
import { Components } from '../../AppComponentLoader.js'
import layout from './layout.js'
import {
  convertToCustomer,
  showAttachments,
  // setDefaultValues,
  deadProspects,
  filterConvertedProspects,
} from '../../actions/index.js'

export const actions: ResourceOptions['actions'] = {
  list: {
    before: filterConvertedProspects,
  },
  deadProspects: {
    actionType: 'resource',
    component: Components.DeadProspects,
    handler: deadProspects,
  },
  new: {
    layout: layout.new,
    // before: [setDefaultValues],
    // custom: {
    //   statusCode: 'ENTERED',
    //   activityCode: 'FORM',
    //   activityTitle: 'Zgłoszenie',
    //   nextActivityCode: 'DECISION',
    //   nextActivityDay: 30,
    // },
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
    guard: 'areYouSureToConvertThisProspectIntoCustomer',
    component: false,
    handler: convertToCustomer,
  },
  bulkDelete: {
    isAccessible: false,
  },
}
