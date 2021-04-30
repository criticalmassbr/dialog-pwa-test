import * as db from '../database'
import {
  User,
} from '../schema/types'

export const resolvers = {
  Query: {
    users: (search?: string): User[] => {
      if (search) return db.find({ search })

      return db.findAll()
    },
  },
  People: {
    __resolveType: () => {
      return 'User'
    }
  }
}
