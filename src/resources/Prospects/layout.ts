import { LayoutElement } from 'adminjs'

const show: Array<LayoutElement> = [
  [
    { flex: true, flexDirection: 'row', justifyContent: 'space-between' },
    [['company', { flexGrow: 1, marginRight: '10px' }], 'statusCode'],
  ],
  ['address', { className: 'customer-show-address' }],
  [
    { flexDirection: 'row', flex: true },
    [
      ['phone', { marginRight: '10px' }],
      ['email', { flexGrow: 1, marginRight: '10px' }],
      ['url', { flexGrow: 1 }],
    ],
  ],
  [
    { flexDirection: 'row', flex: true },
    [
      ['sourceId', { flexGrow: 1, marginRight: '10px' }],
      ['businessId', { flexGrow: 1 }],
    ],
  ],
  'info',
  'persons',
  'notes',
  [
    { flexDirection: 'row', flex: true },
    [
      ['nextActivityCode', { flexGrow: 1, marginRight: '10px' }],
      ['nextActivityDate', { flexGrow: 1 }],
    ],
  ],
  'activities',
]

const edit: Array<LayoutElement> = [
  [
    { flex: true, flexDirection: 'row', justifyContent: 'space-between' },
    [['company', { flexGrow: 1, marginRight: '10px' }], 'statusCode'],
  ],
  ['address', { className: 'customer-edit-address' }],
  [
    { flexDirection: 'row', flex: true },
    [
      ['phone', { marginRight: '10px' }],
      ['email', { flexGrow: 1, marginRight: '10px' }],
      ['url', { flexGrow: 1 }],
    ],
  ],
  [
    { flexDirection: 'row', flex: true },
    [
      ['sourceId', { flexGrow: 1, marginRight: '10px' }],
      ['businessId', { flexGrow: 1 }],
    ],
  ],
  'info',
  'persons',
  'notes',
  'activities',
  [
    { flexDirection: 'row', flex: true },
    [
      ['nextActivityCode', { flexGrow: 1, marginRight: '10px' }],
      ['nextActivityDate', { flexGrow: 1 }],
    ],
  ],
]

const timestamps: LayoutElement = [
  { flexDirection: 'row', flex: true },
  [
    ['createdAt', { flexGrow: 2, marginRight: '10px' }],
    ['updatedAt', { flexGrow: 2, marginRight: '10px' }],
    ['id', { flexGrow: 1 }],
  ],
]

export default {
  new: edit,
  edit,
  show: [...show, timestamps],
}
