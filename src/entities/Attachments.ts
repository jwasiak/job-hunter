import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  VirtualColumn,
} from 'typeorm'

export interface IAttachments {
  id: number
  company: string
  files: Array<string>
  folders: Array<string>
  mimeTypes: Array<string>
  createdAt: Date
  updatedAt: Date | null
}

@Entity({ name: 'attachments' })
export class Attachments extends BaseEntity implements IAttachments {
  @PrimaryGeneratedColumn()
  public id: number

  @Column({ unique: true })
  public company: string

  @Column({ nullable: true, type: 'jsonb', default: '[]' })
  public files: string[]

  @Column({ nullable: true, type: 'jsonb', default: '[]' })
  public folders: string[]

  @Column({ name: 'mime_types', nullable: true, type: 'jsonb', default: '[]' })
  public mimeTypes: string[]

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date

  @UpdateDateColumn({ name: 'updated_at' })
  public updatedAt: Date

  @VirtualColumn({ query: () => `SELECT jsonb_array_length(files)` })
  public counter: number
}
