import { User } from '@/domain/entities'

export class UserViewModel {
  _id: string
  index: number
  picture: string
  age: number
  eyeColor: string
  name: string
  company: string
  email: string
  phone: string
  friends: Friend[]
  greeting: string

  static map (entity: User): UserViewModel {
    return entity
  }

  static mapCollection (entities: User[]): UserViewModel[] {
    return entities.map(UserViewModel.map)
  }
}''

type Friend = {
  _id: string
  index: number
  picture: string
  age: number
  eyeColor: string
  name: string
  company: string
  email: string
  phone: string
}

