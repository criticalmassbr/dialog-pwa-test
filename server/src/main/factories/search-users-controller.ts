import { UserLoaderService } from '@/data/services'
import { FakeDbRepository } from '@/infra/repositories'
import { SearchUsersController } from '@/presentation/controllers'
import { Controller } from '@/presentation/contracts'

export const makeSearchUsersController = (): Controller => {
  const repo = new FakeDbRepository()
  const loader = new UserLoaderService(repo)
  return new SearchUsersController(loader)
}
