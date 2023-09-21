import { formatDateProperty } from '@adminjs/design-system'
import { PropertyType, ShowPropertyProps, allowOverride } from 'adminjs'
import React from 'react'

const mapValue = (value: Date, propertyType: PropertyType): string => {
  // console.log('value', value)
  console.log('propertyType', propertyType)
  if (!value) {
    return ''
  }
  const date = new Date(value)
  if (date) {
    return formatDateProperty(date, propertyType)
  }
  return ''
}

const List: React.FC<ShowPropertyProps> = props => {
  const { property, record } = props
  const value = mapValue(record.params[property.path], property.type)

  return <span>{value}</span>
}

export default List
