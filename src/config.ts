import { AdminJSOptions } from 'adminjs'
import { AppComponentLoader, Components } from './AppComponentLoader.js'
import { translations } from './translations/index.js'

export const AdminConfig: AdminJSOptions = {
  componentLoader: AppComponentLoader,
  assetsCDN:
  process.env.NODE_ENV === "production"
    ? `http://${process.env.HOSTNAME}:${process.env.PORT}`
    : undefined,
  assets: {
    styles: ['/adminjs.css'],
  },
  dashboard: {
    component: Components.JHdashboard,
  },
  branding: {
    logo: "/job-hunter-logo.png",
    companyName: 'JOB HUNTER',
    withMadeWithLove: false,
    theme: {
      colors: {
        // container: '#00bbc5',
        // bg: '#00bbc5',
        // filterBg: '#00bbc5',
        sidebar: '#eaf5fc',
        // sidebar: '#eaf3f9',
        primary100: '#0e93e5',
        accent: '#fda03c',

        // success: '#46bc7b',
        successDark: '#159a7d',
        success: '#1acaa2',
        successLight: '#e6fffb',

        errorDark: '#b32443',
        error: '#ea2c56',
        errorLight: '#fde7ec',

        infoDark: '#329360',
        info: '#3ebf7b',
        infoLight: '#ebfaf2',

        text: '#0C1E29',
        inputBorder: '#9bc0e9',
        border: '#9bc0e9',

        filterBg: '#fff2e5',
      },
    },
  },
  settings: {
    defaultPerPage: 20,
  },

  locale: {
    availableLanguages: ['pl'],
    debug: true,
    language: 'pl',
    translations,
  },
  pages: {
    Help: {
      component: Components.HelpPage,
      icon: 'HelpCircle',
    },
  },
  rootPath: '/',
  loginPath: '/login',
  logoutPath: '/logout',
}
