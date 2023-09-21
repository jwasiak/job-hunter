import { Link, ValueGroup } from '@adminjs/design-system'
import { ShowPropertyProps, useTranslation } from 'adminjs'
import React, { FC } from 'react'

const ShowMailTo: FC<ShowPropertyProps> = props => {
  const { record, property } = props
  const { resourceId } = property
  const value = record.params[property.path]
  const href = value ? `mailto:${value}` : null

  const { tl } = useTranslation()

  return (
    <ValueGroup label={tl(property.label, resourceId)}>
      <Link href={href} target="_blank">
        {value}
      </Link>
    </ValueGroup>
  )
}

export default ShowMailTo
