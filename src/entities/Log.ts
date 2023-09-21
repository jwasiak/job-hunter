import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

export interface ILog {
  id: number
  action: string
  resource: string
  user: string | null
  recordId: string
  recordTitle: string | null
  difference: Record<string, unknown> | null
  createdAt: Date
}

@Entity({ name: 'logs' })
export class Log extends BaseEntity implements ILog {
  @PrimaryGeneratedColumn()
  public id: number

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date

  @Column({ name: 'action', type: 'text' })
  public action: string

  @Column({ name: 'resource', type: 'text' })
  public resource: string

  @Column({ name: 'record_id' })
  public recordId: string

  @Column({ name: 'record_title', type: 'text', nullable: true })
  public recordTitle: string

  @Column({ name: 'difference', type: 'jsonb', nullable: true })
  public difference: Record<string, unknown>

  @Column({ nullable: true })
  public user: string
}
