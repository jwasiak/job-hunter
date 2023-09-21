import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

export interface ISource {
  id: number
  name: string
}

@Entity({ name: 'sources' })
export class Source extends BaseEntity implements ISource {
  @PrimaryGeneratedColumn()
  public id: number

  @Column()
  public name: string
}
