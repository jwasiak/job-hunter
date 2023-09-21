import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

export interface IBusiness {
  id: number
  name: string
}

@Entity({ name: 'business' })
export class Business extends BaseEntity implements IBusiness {
  @PrimaryGeneratedColumn()
  public id: number

  @Column()
  public name: string
}
