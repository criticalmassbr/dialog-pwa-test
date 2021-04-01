import { UserRepository } from '@/data/contracts'
import { UserModel } from '@/data/models'
import { db } from '@/infra/data-sources'

export class FakeDbRepository implements UserRepository {
  async loadUsers (): Promise<UserModel[]> {
    return db.map(item => (
      item
    ))
  }

  async loadUserById (id: string): Promise<UserModel> {
    return db.find(item => (
      item._id == id
    ))
  }

  async searchUsers (name: string): Promise<UserModel[]> {
    const regex = new RegExp(name.split(' ').join('.*\\ .*'), 'i');
    return db.filter(item => (
      regex.test(item.name)
    ))
  }
}