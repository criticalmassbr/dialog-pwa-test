import { UserLoader } from '@/domain/usecases'
import { Controller, HttpResponse, serverError, ok } from '@/presentation/contracts'
import { UserViewModel } from '@/presentation/view-models'

export class FindUserController implements Controller {
  constructor (private readonly userLoader: UserLoader) {}
  async handle (args: any): Promise<HttpResponse<UserViewModel>> {
    try {
      const user = await this.userLoader.findById(args._id)
      return ok(user)
    } catch (error) {
      return serverError(error)
    }
  }
}
