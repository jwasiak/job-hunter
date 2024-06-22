import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate } from 'typeorm'

export interface IAttachments {
  id: number
  company: string
  files: Array<string>
  folders: Array<string>
  mimeTypes: Array<string>
  createdAt: Date
  updatedAt: Date | null
  totalAttachments: number
}

@Entity({ name: 'attachments' })
export class Attachments extends BaseEntity implements IAttachments {
  @PrimaryGeneratedColumn()
  public id: number

  @Column({ unique: true })
  public company: string

  @Column({ nullable: true, type: 'json', default: '[]' })
  public files: string[]

  @Column({ nullable: true, type: 'json', default: '[]' })
  public folders: string[]

  @Column({ name: 'mime_types', nullable: true, type: 'json', default: '[]' })
  public mimeTypes: string[]

  @Column({ name: 'created_at' })
  public createdAt: Date

  @Column({ name: 'updated_at' })
  public updatedAt: Date

  @Column({ type: 'integer', default: 0 })
  public totalAttachments: number

  @BeforeInsert()
  public setCreateDate(): void {
    this.createdAt = new Date()
    this.updatedAt = new Date()
  }

  @BeforeUpdate()
  public setUpdateDate(): void {
    this.updatedAt = new Date()
  }

  @BeforeInsert()
  @BeforeUpdate()
  public countTotalAttachments(): void {
    this.totalAttachments = this.files ? this.files.length : 0
  }
}
