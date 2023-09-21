import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm'
import { UpperCaseTransformer } from '../utils/transformers.js'

export interface ICompanyStatus {
  code: string
  name: string
  order: number | null
}

@Entity({ name: 'company_status' })
export class CompanyStatus extends BaseEntity implements ICompanyStatus {
  @PrimaryColumn({
    transformer: new UpperCaseTransformer(),
  })
  public code: string

  @Column()
  public name: string

  @Column({ type: 'integer', nullable: true, default: 10 })
  public order: number
}
