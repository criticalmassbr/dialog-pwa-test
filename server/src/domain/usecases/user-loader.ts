import { User } from '@/domain/entities'

export interface UserLoader {
  load: () => Promise<User[]>
  findById: (id: string) => Promise<User>
  searchUsers: (name: string) => Promise<User[]>
}