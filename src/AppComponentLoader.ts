import { ComponentLoader } from 'adminjs'

export const AppComponentLoader = new ComponentLoader()

export const Components = {
  JHdashboard: AppComponentLoader.add('JHdashboard', './components/crm-dashboard'),
  ShowLink: AppComponentLoader.add('ShowLink', './components/show-link'),
  ListLink: AppComponentLoader.add('ListLink', './components/list-link'),
  ShowMailTo: AppComponentLoader.add('ShowMailTo', './components/show-mailto'),
  SidebarResourceSection: AppComponentLoader.override(
    'SidebarResourceSection',
    './components/sidebar-resource-section'
  ),
  SidebarBranding: AppComponentLoader.override('SidebarBranding', './components/sidebar-branding'),
  HelpPage: AppComponentLoader.add('HelpPage', './components/help-page'),
  ListCounter: AppComponentLoader.add('ListCounter', './components/list-counter'),
  CustomActionButton: AppComponentLoader.add('CustomActionButton', './components/action-button'),
  Invoices: AppComponentLoader.add('Invoices', './components/invoices'),
  SelectTemplateToClipboard: AppComponentLoader.add('SelectTemplateToClipboard', './components/select-template'),
}
