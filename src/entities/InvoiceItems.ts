import { UnitsEnum } from '../enums/Units.js'
export class InvoiceItem {
  name: string
  quantity: number
  unit: UnitsEnum
  price: number
  value: number
}
