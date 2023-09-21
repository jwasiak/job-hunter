import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
  UpdateDateColumn,
  VirtualColumn,
} from 'typeorm'

import { Customer } from './Customer.js'
import { InvoiceItem } from './InvoiceItems.js'
import { Payment } from './Payments.js'

export interface IInvoice {
  id: number
  customerId: number
  // company: string
  invoiceNo: string
  // taxId: string | null
  // companyPlace: string | null
  // companyAddress: string | null
  invoiceDate: Date
  dueDate: Date
  items: Array<InvoiceItem>
  note: string | null
  isPaid: boolean
  invoiceValue: number
  balance: number
  payments: Array<Payment>
  createdAt: Date
  updatedAt: Date
}

@Entity({ name: 'invoices' })
export class Invoice extends BaseEntity implements IInvoice {
  @PrimaryGeneratedColumn()
  public id: number

  @Column({ name: 'invoice_no' })
  public invoiceNo: string

  // @Column()
  // public company: string
  // @Column({ name: 'tax_id', nullable: true })
  // public taxId: string
  // @Column({ name: 'company_place', nullable: true })
  // public companyPlace: string
  // @Column({ name: 'company_address', nullable: true })
  // public companyAddress: string
  // @Column({ nullable: true })

  public note: string
  @Column({ nullable: true })
  @Column({ type: 'date', name: 'invoice_date' })
  public invoiceDate: Date

  @Column({ type: 'date', name: 'due_date' })
  public dueDate: Date

  @Column({ type: 'jsonb', default: '[]' })
  public items: InvoiceItem[]

  @Column({ type: 'jsonb', default: '[]' })
  public payments: Payment[]

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date

  @UpdateDateColumn({ name: 'updated_at' })
  public updatedAt: Date

  @ManyToOne(() => Customer, customer => customer.id)
  @JoinColumn({ name: 'customer_id' })
  public customer: Customer
  @RelationId((invoice: Invoice) => invoice.customer)
  @Column({ name: 'customer_id' })
  public customerId: number

  @Column({ type: 'numeric', default: 0 })
  public paid: number

  @Column({ name: 'is_paid', default: false })
  public isPaid: boolean

  @Column({ type: 'numeric', name: 'invoice_value', default: 0 })
  public invoiceValue: number

  @VirtualColumn({ query: () => `SELECT paid-invoice_value` })
  public balance: number
}
