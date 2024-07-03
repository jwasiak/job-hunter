import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate } from 'typeorm'

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

  @Column({ name: 'created_at', nullable: true })
  public createdAt: Date

  @Column({ name: 'updated_at', nullable: true  })
  public updatedAt: Date

  @Column()
  public url: string

  @Column({ nullable: true })
  public description: string

  @Column({
    type: 'text',
    enum: LinksEnum,
    nullable: true,
  })
  public category: LinksEnum

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
