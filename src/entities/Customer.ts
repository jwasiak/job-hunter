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

import { Activity, Person, Note } from './index.js'

import { CompanyStatus } from './CompanyStatus.js'
import { ActivityType } from './ActivityType.js'
import { Source } from './Source.js'
import { Business } from './Business.js'
import { Address } from './Address.js'

export interface ICustomer {
  id: number
  company: string
  address?: Address
  taxId?: string
  phone?: string
  email?: string
  url?: string
  info?: string
  persons?: Array<Person>
  activities?: Array<Activity>
  notes?: Array<Note>
  statusCode?: string
  attachmentsId?: number
  sourceId?: number
  businessId?: number
  createdAt: Date
  updatedAt: Date
  totalSales?: number
  totalBalance?: number
}

@Entity({ name: 'customers' })
export class Customer extends BaseEntity implements ICustomer {
  @PrimaryGeneratedColumn()
  public id: number

  @Column({ unique: true })
  public company: string

  @Column({ type: 'jsonb', nullable: true })
  public address: Address

  @Column({ name: 'tax_id', nullable: true })
  public taxId: string

  @Column({ nullable: true })
  public phone: string

  @Column({ nullable: true })
  public email: string

  @Column({ nullable: true })
  public url: string

  @Column({ nullable: true })
  public info: string

  @Column({ name: 'attachments_id', nullable: true })
  public attachmentsId: number

  @Column({ type: 'jsonb', nullable: true })
  public persons: Person[]

  @Column({ type: 'jsonb', nullable: true })
  public activities: Activity[]

  @Column({ type: 'jsonb', nullable: true })
  public notes: Note[]

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date

  @UpdateDateColumn({ name: 'updated_at' })
  public updatedAt: Date

  @ManyToOne(() => CompanyStatus, status => status.code)
  @JoinColumn({ name: 'status_code' })
  public status: CompanyStatus
  @RelationId((customer: Customer) => customer.status)
  @Column({ name: 'status_code', nullable: true, default: 'UNQUALIFIED' })
  public statusCode: string

  @ManyToOne(() => ActivityType)
  @JoinColumn({ name: 'next_activity_code' })
  public nextActivity: ActivityType
  @RelationId((customer: Customer) => customer.nextActivity)
  @Column({ name: 'next_activity_code', nullable: true })
  public nextActivityCode: string

  @ManyToOne(() => Source)
  @JoinColumn({ name: 'source_id' })
  public source: Source
  @RelationId((customer: Customer) => customer.source)
  @Column({ name: 'source_id', nullable: true })
  public sourceId: number

  @ManyToOne(() => Business)
  @JoinColumn({ name: 'business_id' })
  public business: Business
  @RelationId((customer: Customer) => customer.business)
  @Column({ name: 'business_id', nullable: true })
  public businessId: number

  @Column({ name: 'next_activity_date', nullable: true })
  public nextActivityDate: Date

  @VirtualColumn({ query: name => `SELECT SUM(invoice_value) FROM invoices WHERE customer_id=${name}.id` })
  public totalSales: number

  @VirtualColumn({
    query: name => `SELECT (SUM(paid) - SUM(invoice_value)) FROM invoices WHERE customer_id=${name}.id`,
  })
  public totalBalance: number

  @VirtualColumn({ query: () => `SELECT jsonb_array_length(activities)` })
  public counter: number
}
