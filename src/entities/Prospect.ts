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
  VirtualColumn,
} from 'typeorm'

import { Activity, Person, Note } from './index.js'

import { CompanyStatus } from './CompanyStatus.js'
import { ActivityType } from './ActivityType.js'
import { Source } from './Source.js'
import { Business } from './Business.js'
import { Address } from './Address.js'

export interface IProspect {
  id: number
  company: string
  address?: Address
  phone?: string
  email?: string
  url?: string
  info?: string
  customerId?: number
  persons?: Array<Person>
  activities?: Array<Activity>
  notes?: Array<Note>
  statusCode?: string
  attachmentsId?: number
  sourceId?: number
  businessId?: number
  createdAt: Date
  updatedAt: Date
  isCustomer?: boolean
}

@Entity({ name: 'prospects' })
export class Prospect extends BaseEntity implements IProspect {
  @PrimaryGeneratedColumn()
  public id: number

  @Column({ unique: true })
  public company: string

  @Column({ type: 'text', nullable: true })
  public address: Address

  @Column({ nullable: true })
  public phone: string

  @Column({ nullable: true })
  public email: string

  @Column({ nullable: true })
  public url: string

  @Column({ nullable: true })
  public info: string

  @Column({ name: 'is_customer', default: false })
  public isCustomer: boolean

  @Column({ name: 'customer_id', nullable: true })
  public customerId: number

  @Column({ name: 'attachments_id', nullable: true })
  public attachmentsId: number

  @Column({ type: 'json', nullable: true })
  public persons: Person[]

  @Column({ type: 'json', nullable: true })
  public activities: Activity[]

  @Column({ type: 'json', nullable: true })
  public notes: Note[]

  @Column({ name: 'created_at' })
  public createdAt: Date

  @Column({ name: 'updated_at' })
  public updatedAt: Date

  @ManyToOne(() => CompanyStatus, status => status.code)
  @JoinColumn({ name: 'status_code' })
  public status: CompanyStatus
  @RelationId((prospect: Prospect) => prospect.status)
  @Column({ name: 'status_code', nullable: true })
  public statusCode: string

  @ManyToOne(() => ActivityType)
  @JoinColumn({ name: 'next_activity_code' })
  public nextActivity: ActivityType
  @RelationId((prospect: Prospect) => prospect.nextActivity)
  @Column({ name: 'next_activity_code', nullable: true })
  public nextActivityCode: string

  @ManyToOne(() => Source)
  @JoinColumn({ name: 'source_id' })
  public source: Source
  @RelationId((prospect: Prospect) => prospect.source)
  @Column({ name: 'source_id', nullable: true })
  public sourceId: number

  @ManyToOne(() => Business)
  @JoinColumn({ name: 'business_id' })
  public business: Business
  @RelationId((prospect: Prospect) => prospect.business)
  @Column({ name: 'business_id', nullable: true })
  public businessId: number

  @Column({ name: 'next_activity_date', nullable: true })
  public nextActivityDate: Date

  @VirtualColumn({ query: () => `SELECT json_array_length(activities)` })
  public counter: number

  @VirtualColumn({ query: () => `SELECT lower(company)` })
  public company_: string

  @BeforeInsert()
  public setCreateDate(): void {
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  @BeforeUpdate()
  public setUpdateDate(): void {
    this.updatedAt = new Date();
  }
}
