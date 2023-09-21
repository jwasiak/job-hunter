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

import { Activity, Person } from './index.js'

import { CompanyStatus } from './CompanyStatus.js'
import { ActivityType } from './ActivityType.js'
import { Source } from './Source.js'
import { Business } from './Business.js'

export interface IContact {
  id: number
  company: string
  phone: string | null
  email: string | null
  url: string | null
  info: string | null
  isProspect: boolean
  prospectId: number | null
  persons: Array<Person> | null
  activities: Array<Activity> | null
  statusCode: string | null
  attachmentsId: number | null
  sourceId: number | null
  businessId: number | null
  createdAt: Date
  updatedAt: Date
}

@Entity({ name: 'contacts' })
export class Contact extends BaseEntity implements IContact {
  @PrimaryGeneratedColumn()
  public id: number

  @Column({ unique: true })
  public company: string

  @Column({ nullable: true })
  public phone: string

  @Column({ nullable: true })
  public email: string

  @Column({ nullable: true })
  public url: string

  @Column({ nullable: true })
  public info: string

  @Column({ name: 'is_prospect', default: false })
  public isProspect: boolean

  @Column({ name: 'prospect_id', nullable: true })
  public prospectId: number

  @Column({ name: 'attachments_id', nullable: true })
  public attachmentsId: number

  @Column({ type: 'jsonb', nullable: true, default: '[]' })
  public persons: Person[]

  @Column({ type: 'jsonb', nullable: true, default: '[]' })
  public activities: Activity[]

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date

  @UpdateDateColumn({ name: 'updated_at' })
  public updatedAt: Date

  @ManyToOne(() => CompanyStatus, status => status.code)
  @JoinColumn({ name: 'status_code' })
  public status: CompanyStatus
  @RelationId((contact: Contact) => contact.status)
  @Column({ name: 'status_code', nullable: true, default: 'ENTERED' })
  public statusCode: string

  @ManyToOne(() => ActivityType)
  @JoinColumn({ name: 'next_activity_code' })
  public nextActivity: ActivityType
  @RelationId((contact: Contact) => contact.nextActivity)
  @Column({ name: 'next_activity_code', nullable: true })
  public nextActivityCode: string

  @ManyToOne(() => Source)
  @JoinColumn({ name: 'source_id' })
  public source: Source
  @RelationId((contact: Contact) => contact.source)
  @Column({ name: 'source_id', nullable: true })
  public sourceId: number

  @ManyToOne(() => Business)
  @JoinColumn({ name: 'business_id' })
  public business: Business
  @RelationId((contact: Contact) => contact.business)
  @Column({ name: 'business_id', nullable: true })
  public businessId: number

  @Column({ name: 'next_activity_date', nullable: true })
  public nextActivityDate: Date

  @VirtualColumn({ query: () => `SELECT jsonb_array_length(activities)` })
  public counter: number
}
