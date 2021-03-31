import { UserModel } from '@/data/models'

export interface UserRepository {
  loadUsers: () => Promise<UserModel[]>
  loadUserById: (id: string) => Promise<UserModel>
  searchUsers: (name: string) => Promise<UserModel[]>
}
