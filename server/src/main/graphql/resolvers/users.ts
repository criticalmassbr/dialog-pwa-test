import { adaptResolver } from '@/main/adapters'
import { makeFindUserController, makeListUserController, makeSearchUsersController } from '@/main/factories'

export default {
  Query: {
    users: async (parent: any, args: any) => adaptResolver(makeListUserController(), args),
    userDetail: async (parent: any, args: any) => {
      const findUserController = makeFindUserController();
      const httpResponse = await findUserController.handle(args);
      return httpResponse.data
    },
    SearchUsers: async (parent: any, args: any) => {
      const searchUsersController = makeSearchUsersController();
      const httpResponse = await searchUsersController.handle(args);
      return httpResponse.data
    }
  }
}
