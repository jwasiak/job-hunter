import { ResourceOptions } from 'adminjs'

export const menu: Record<string, ResourceOptions['navigation']> = {
  app: { icon: 'File', name: 'CRM' },
  settings: { icon: 'Settings', name: 'Settings' },
  users: { icon: 'Users', name: 'Users' },
}
