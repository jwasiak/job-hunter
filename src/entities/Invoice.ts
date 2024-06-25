import {
  BaseEntity,
  Column,
  BeforeInsert,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
  BeforeUpdate,
  AfterInsert,
  AfterUpdate,
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
  // totalSales: number
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

  @Column({ type: 'json', default: '[]' })
  public items: InvoiceItem[]

  @Column({ type: 'json', default: '[]' })
  public payments: Payment[]

  @Column({ name: 'created_at' })
  public createdAt: Date

  @Column({ name: 'updated_at' })
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

  @Column({ type: 'numeric', name: 'balance', default: 0 })
  public balance: number

  @BeforeInsert()
  public setCreateDate(): void {
    this.createdAt = new Date()
    this.updatedAt = new Date()
  }

  @BeforeUpdate()
  public setUpdateDate(): void {
    this.updatedAt = new Date()
  }

  @BeforeInsert()
  @BeforeUpdate()
  public calculateBalance(): void {
    this.balance = this.paid - this.invoiceValue
  }

  @AfterInsert()
  @AfterUpdate()
  public async calculateTotalSales(): Promise<void> {
    const { sales } = await Invoice.createQueryBuilder()
      .select('SUM(invoice_value)', 'sales')
      .where('customer_id = :id', { id: this.customerId })
      .getRawOne()

    const { paid } = await Invoice.createQueryBuilder()
      .select('SUM(paid)', 'paid')
      .where('customer_id = :id', { id: this.customerId })
      .getRawOne()

    await Customer.createQueryBuilder()
      .update(Customer)
      .set({ totalSales: sales, totalBalance: paid - sales })
      .where('id = :id', { id: this.customerId })
      .execute()
  }
}
