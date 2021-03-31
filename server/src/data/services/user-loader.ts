import { User } from '@/domain/entities'
import { UserLoader } from '@/domain/usecases'
import { UserRepository } from '@/data/contracts'

export class UserLoaderService implements UserLoader {
  constructor (private readonly userRepository: UserRepository) {}

  async load (): Promise<User[]> {
    return this.userRepository.loadUsers()
  }

  async findById (id: string): Promise<User> {
    return this.userRepository.loadUserById(id)
  }

  async searchUsers (name: string): Promise<User[]> {
    return this.userRepository.searchUsers(name)
  }
}
