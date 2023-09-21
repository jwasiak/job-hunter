import { LayoutElement } from 'adminjs'

const base: Array<LayoutElement> = [
  [
    { flexDirection: 'row', flex: true },
    [
      ['invoiceNo', { marginRight: '10px' }],
      ['customerId', { flexGrow: 4 }],
    ],
  ],
  [
    { flexDirection: 'row', flex: true },
    [
      ['invoiceDate', { flexGrow: 1, marginRight: '10px' }],
      ['invoiceValue', { flexGrow: 1, marginRight: '10px' }],
      ['dueDate', { flexGrow: 1, marginRight: '10px' }],
      ['paid', { flexGrow: 1 }],
    ],
  ],
  'note',
  'items',
  'payments',
]

const timestamps: LayoutElement = [
  { flexDirection: 'row', flex: true },
  [
    ['createdAt', { flexGrow: 1, marginRight: '10px' }],
    ['updatedAt', { flexGrow: 1 }],
  ],
]

export default {
  new: base,
  edit: base,
  show: [...base, timestamps],
}
