import React from 'react'
import { ShowPropertyProps } from 'adminjs'
import { Badge } from '@adminjs/design-system'

const ListCounter: React.FC<ShowPropertyProps> = props => {
  const { record } = props
  let counter = 0
  if (record.params.totalActivities) counter = record.params.totalActivities
  if (record.params.totalAttachments) counter = record.params.totalAttachments

  return <Badge outline={true}>{counter}</Badge>
}
export default ListCounter
