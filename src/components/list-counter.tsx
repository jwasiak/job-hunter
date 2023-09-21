import React from 'react'
import { ShowPropertyProps } from 'adminjs'
import { Badge } from '@adminjs/design-system'

const ListCounter: React.FC<ShowPropertyProps> = props => {
  const { record } = props

  // console.log(props)
  return <Badge outline={true}>{record.params.counter}</Badge>
}
export default ListCounter
