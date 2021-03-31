import { UserLoader } from '@/domain/usecases'
import { Controller, HttpResponse, serverError, ok } from '@/presentation/contracts'
import { UserViewModel } from '@/presentation/view-models'

export class ListUserController implements Controller {
  constructor (private readonly userLoader: UserLoader) {}

  async handle (): Promise<HttpResponse<UserViewModel[]>> {
    try {
      const users = await this.userLoader.load()
      return ok(UserViewModel.mapCollection(users))
    } catch (error) {
      return serverError(error)
    }
  }
}