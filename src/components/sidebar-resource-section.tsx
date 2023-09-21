import React, { FC } from 'react'
import { Navigation } from '@adminjs/design-system'
import { useTranslation, type SidebarResourceSectionProps, useNavigationResources } from 'adminjs'

const SidebarResourceSection: FC<SidebarResourceSectionProps> = ({ resources }) => {
  const elements = useNavigationResources(resources)
  const { translateLabel } = useTranslation()

  const openUrl = (url: string) => () => {
    window.open(url, '_blank')
  }

  elements.push({
    icon: 'Linkedin',
    label: translateLabel('linkedin'),
    onClick: openUrl('https://linkedin.com/'),
  })

  return <Navigation label={translateLabel('navigation')} elements={elements} />
}

export default SidebarResourceSection
