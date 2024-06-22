import { BaseEntity, Column, BeforeInsert, Entity, PrimaryGeneratedColumn, BeforeUpdate } from 'typeorm'
import { RoleEnum } from '../enums/Roles.js'
interface IUser {
  id: number
  login: string
  email?: string
  firstName?: string
  lastName: string
  password?: string
  fullName: string
  role: RoleEnum
}

@Entity({ name: 'users' })
export class User extends BaseEntity implements IUser {
  @PrimaryGeneratedColumn()
  public id: number

  @Column({ name: 'login', type: 'text', unique: true })
  public login: string

  @Column({ name: 'last_name', type: 'text' })
  public lastName: string

  @Column({ name: 'email', type: 'text', nullable: true })
  public email: string

  @Column({ name: 'password', type: 'text', nullable: true })
  public password: string

  @Column({ name: 'first_name', type: 'text', nullable: true })
  public firstName: string

  @Column({ name: 'full_name', type: 'text', nullable: true })
  public fullName: string

  @Column({ name: 'created_at' })
  public createdAt: Date

  @Column({ name: 'updated_at' })
  public updatedAt?: Date

  @Column({
    type: 'text',
    enum: RoleEnum,
    nullable: true,
  })
  public role: RoleEnum

  @Column({ default: false })
  public active: boolean

  @BeforeInsert()
  public setCreateDate(): void {
    this.createdAt = new Date()
    this.updatedAt = new Date()
  }

  @BeforeUpdate()
  public setUpdateDate(): void {
    console.log(this.firstName, this.lastName)
    this.updatedAt = new Date()
  }

  @BeforeInsert()
  @BeforeUpdate()
  public setFullName(): void {
    this.fullName = `${this.firstName} ${this.lastName}`
  }
}
