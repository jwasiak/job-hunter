import { ResourceWithOptions } from 'adminjs'
import loggerFeature from '@adminjs/logger'
import importExportFeature from '@adminjs/import-export'
// import uploadFeature from '@adminjs/upload'
import { AppComponentLoader } from '../../AppComponentLoader.js'
// import { owningRelationSettingsFeature } from '../../relations/relations.feature.js'
// import { RelationType } from '../../relations/index.js'

export const features: ResourceWithOptions['features'] = [
  loggerFeature({
    componentLoader: AppComponentLoader,
  }),
  importExportFeature({
    componentLoader: AppComponentLoader,
  }),
  // owningRelationSettingsFeature({
  //   componentLoader: AppComponentLoader,
  //   relations: {
  //     notes: {
  //       type: RelationType.OneToMany,
  //       target: {
  //         joinKey: 'contactId',
  //         resourceId: 'ContactNote',
  //       },
  //     },
  //     actions: {
  //       type: RelationType.OneToMany,
  //       target: {
  //         joinKey: 'actionId',
  //         resourceId: 'ContactAction',
  //       },
  //     },
  //   },
  // }),
]
