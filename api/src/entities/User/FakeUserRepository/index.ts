import { User } from '~/domain/User/User';
import { UserDTO } from '~/domain/User/UserDTO';
import IUserRepository from '../IUserRepository';

let users: User[] = [];
export default class MockUsersRepository implements IUserRepository {
  async delete(id: any): Promise<void> {
    users = users.filter((user) => user._id !== id);
  }

  async findAll(): Promise<User[]> {
    return users;
  }

  async findById(id: any): Promise<User | undefined> {
    return users.find((user) => user._id === id);
  }

  async findByName(name: string): Promise<User[]> {
    const nameLength = name.length;
    const considerableSubstringLength = Math.ceil(nameLength * 0.6);
    const considerableSubstring = name.slice(0, considerableSubstringLength);

    return users.filter((user) => new RegExp(`${considerableSubstring}`, 'gi').test(user.name));
  }

  async save(user: User): Promise<User> {
    const foundIndex = users.findIndex((thisUser) => thisUser._id === user._id);

    users[foundIndex] = user;

    return user;
  }

  async create(user: UserDTO): Promise<User> {
    users = [...users, user];
    return user;
  }
}
