import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm'

export interface IActivityType {
  code: string
  name: string
  isActive: boolean
}

@Entity({ name: 'activity_types' })
export class ActivityType extends BaseEntity implements IActivityType {
  @PrimaryColumn()
  public code: string

  @Column()
  public name: string

  @Column({ name: 'is_active', default: true })
  public isActive: boolean
}
