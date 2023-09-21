import loggerFeature from '@adminjs/logger'
import uploadFeature from '@adminjs/upload'
import { ResourceWithOptions, ActionRequest } from 'adminjs'
import { AppComponentLoader, Components } from '../AppComponentLoader.js'
import { Attachments } from '../entities/index.js'
import { menu } from '../menu.js'

// const localProviderConfig = {
//   bucket: 'public/files',
//   opts: {
//     baseUrl: '/files',
//   },
// }

const AwsProviderConfig = {
  accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
  region: process.env.AWS_REGION as string,
  bucket: process.env.AWS_BUCKET as string,
}

const filterWithoutFiles = (req: ActionRequest): ActionRequest => {
  req.query = req.query || {}
  req.query['filters.counter'] > 0
  return req
}

export const AttachmentsResource: ResourceWithOptions = {
  resource: Attachments,
  options: {
    navigation: menu.app,
    listProperties: ['company', 'updatedAt', 'counter'],
    filterProperties: ['company'],
    sort: {
      direction: 'desc',
      sortBy: 'updatedAt',
    },
    properties: {
      company: {
        isTitle: true,
        isDisabled: true,
      },
      files: {
        isVisible: false,
      },
      folders: {
        isVisible: false,
      },
      mimeTypes: {
        isVisible: false,
      },
      counter: {
        components: {
          list: Components.ListCounter,
        },
      },
    },
    actions: {
      // list: {
      //   before: filterWithoutFiles,
      // },
      new: {
        isVisible: false,
      },
      show: {
        layout: ['company', 'attachments'],
      },
      edit: {
        layout: ['company', 'attachments'],
      },
      // delete: {
      //   isAccessible: false,
      // },
      bulkDelete: {
        isAccessible: false,
      },
    },
  },
  features: [
    uploadFeature({
      componentLoader: AppComponentLoader,
      provider: { aws: AwsProviderConfig },
      // provider: { local: localProviderConfig },
      properties: {
        key: 'files',
        bucket: 'folders',
        mimeType: 'mimeTypes',
        file: 'attachments',
      },
      multiple: true,
      // validation: { mimeTypes: ['image/png', 'application/pdf'] },
    }),
    loggerFeature({
      componentLoader: AppComponentLoader,
    }),
  ],
}
