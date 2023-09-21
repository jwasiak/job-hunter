import { LayoutElement } from 'adminjs'

const base: Array<LayoutElement> = [
  [
    { flex: true, flexDirection: 'row', justifyContent: 'space-between' },
    [['company', { flexGrow: 1, marginRight: '10px' }], 'statusCode'],
  ],
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
  new: base,
  edit: base,
  show: [...base, timestamps],
}
