import { Link, ValueGroup } from '@adminjs/design-system'
import { ShowPropertyProps, useTranslation } from 'adminjs'
import React, { FC } from 'react'

const isValidUrl = (url: string): boolean => {
  try {
    return Boolean(new URL(url))
  } catch (e) {
    return false
  }
}

const ShowLink: FC<ShowPropertyProps> = props => {
  const { record, property } = props
  const { resourceId } = property
  const value = record.params[property.path]

  const { tl } = useTranslation()

  return (
    <ValueGroup label={tl(property.label, resourceId)}>
      {isValidUrl(value) ? (
        <Link href={value} target="_blank">
          {value}
        </Link>
      ) : (
        value
      )}
    </ValueGroup>
  )
}

export default ShowLink
