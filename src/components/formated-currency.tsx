import { formatCurrencyProperty } from '@adminjs/design-system'
import { ShowPropertyProps } from 'adminjs'
import React, { FC } from 'react'

const FormatedCurrency: FC<ShowPropertyProps> = props => {
  const { record, property } = props
  const value = record.params[property.path]

  return <span>{formatCurrencyProperty({ value: String(value), decimalScale: 2 })}</span>
}

export default FormatedCurrency
