import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'

import { LinksEnum } from '../enums/LinksEnum.js'

export interface ILink {
  id: number
  url: string
  description: string
  category: LinksEnum
}

@Entity({ name: 'links' })
export class Link extends BaseEntity implements ILink {
  @PrimaryGeneratedColumn()
  public id: number

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date

  @UpdateDateColumn({ name: 'updated_at' })
  public updatedAt: Date

  @Column()
  public url: string

  @Column({ nullable: true })
  public description: string

  @Column({
    type: 'enum',
    enum: LinksEnum,
    nullable: true,
  })
  public category: LinksEnum
}
