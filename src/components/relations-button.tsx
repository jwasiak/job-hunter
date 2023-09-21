import React, { ReactElement } from 'react'

import { stringify } from 'qs'

import { ActionResponse, ActionJSON, buildActionTestId, getActionElementCss } from 'adminjs'

import { useAction } from '../hooks/use-action.js'

export type ActionButtonProps = {
  /** Action to which button should redirect */
  action: ActionJSON
  /** Id of a resource of an action */
  resourceId: string
  /** Optional recordId for _record_ action */
  recordId?: string
  /** Optional recordIds for _bulk_ action */
  recordIds?: Array<string>
  /** optional callback function which will be triggered when action is performed */
  actionPerformed?: (action: ActionResponse) => any
  children?: React.ReactNode
  search?: string
  queryParams?: Record<string, unknown>
}

export const RelationsButton: React.FC<ActionButtonProps> = props => {
  const { children, action, actionPerformed, resourceId, recordId, recordIds, search, queryParams } = props

  const { href, handleClick } = useAction(
    action,
    {
      resourceId,
      recordId,
      recordIds,
      search: stringify(queryParams, { addQueryPrefix: true }) || search,
    },
    actionPerformed
  )

  if (!action) {
    return null
  }

  const firstChild = React.Children.toArray(children)[0]

  if (
    !firstChild ||
    typeof firstChild === 'string' ||
    typeof firstChild === 'number' ||
    typeof firstChild === 'boolean'
  ) {
    throw new Error('RelationsButton has to have one child')
  }

  const contentTag = getActionElementCss(resourceId, action.name, 'button')

  const WrappedElement = React.cloneElement(firstChild as ReactElement<any>, {
    onClick: handleClick,
    'data-testid': buildActionTestId(action),
    'data-css': contentTag,
    href,
  })

  return WrappedElement
}

// const OverridableActionButton = allowOverride(RelationsButton, 'RelationsButton')

// export { OverridableActionButton as RelationsButton, OverridableActionButton as default }

export default RelationsButton
