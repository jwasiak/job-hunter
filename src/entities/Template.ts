import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'

export interface ITemplate {
  id: number
  name: string
}

@Entity({ name: 'templates' })
export class Template extends BaseEntity implements ITemplate {
  @PrimaryGeneratedColumn()
  public id: number

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date

  @UpdateDateColumn({ name: 'updated_at' })
  public updatedAt: Date

  @Column({ nullable: true })
  public name: string

  @Column({ nullable: true })
  public text: string

  @Column({ nullable: true })
  public html: string
}
