import { ResourceWithOptions } from 'adminjs'
import { menu } from '../../menu.js'
import { User } from '../../entities/index.js'
import { features } from './features.js'

export const UsersResource: ResourceWithOptions = {
  resource: User,
  options: {
    navigation: menu.users,
    listProperties: ['fullName', 'email', 'role'],
    showProperties: ['id', 'login', 'firstName', 'lastName', 'email', 'createdAt', 'updatedAt', 'role', 'active'],
    editProperties: ['login', 'newPassword', 'firstName', 'lastName', 'email', 'role', 'active'],
    filterProperties: ['id', 'login', 'fullName', 'email', 'role', 'active'],
    sort: {
      direction: 'asc',
      sortBy: 'lastName',
    },
    actions: {
      list: {
        showFilter: false,
      },
      bulkDelete: {
        isAccessible: false,
      },
    },
    properties: {
      login: {
        isRequired: true,
      },
      lastName: {
        isRequired: true,
      },
      fullName: {
        isTitle: true,
      },
      // role: {
      //   availableValues: [
      //     { value: 'ADMIN', label: 'Admin' },
      //     { value: 'USER', label: 'User' },
      //   ],
      // },
    },
  },
  features,
}
