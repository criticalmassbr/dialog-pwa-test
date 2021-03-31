import { UserLoaderService } from '@/data/services'
import { FakeDbRepository } from '@/infra/repositories'
import { FindUserController } from '@/presentation/controllers'
import { Controller } from '@/presentation/contracts'

export const makeFindUserController = (): Controller => {
  const repo = new FakeDbRepository()
  const loader = new UserLoaderService(repo)
  return new FindUserController(loader)
}
