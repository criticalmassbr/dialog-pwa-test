import { UserLoaderService } from '@/data/services'
import { FakeDbRepository } from '@/infra/repositories'
import { ListUserController } from '@/presentation/controllers'
import { Controller } from '@/presentation/contracts'

export const makeListUserController = (): Controller => {
  const repo = new FakeDbRepository()
  const loader = new UserLoaderService(repo)
  return new ListUserController(loader)
}
