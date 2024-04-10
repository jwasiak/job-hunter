import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate } from 'typeorm'

export interface ITemplate {
  id: number
  name: string
}

@Entity({ name: 'templates' })
export class Template extends BaseEntity implements ITemplate {
  @PrimaryGeneratedColumn()
  public id: number

  @Column({ name: 'created_at' })
  public createdAt: Date

  @Column({ name: 'updated_at' })
  public updatedAt: Date

  @Column({ nullable: true })
  public name: string

  @Column({ nullable: true })
  public text: string

  @Column({ nullable: true })
  public html: string

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
