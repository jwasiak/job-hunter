import { Link } from '@adminjs/design-system'
import { ShowPropertyProps } from 'adminjs'
import React, { FC } from 'react'

const ListLink: FC<ShowPropertyProps> = props => {
  const { record, property } = props
  const value = record.params[property.path]

  return (
    <Link href={value} target="_blank">
      {value}
    </Link>
  )
}

export default ListLink
