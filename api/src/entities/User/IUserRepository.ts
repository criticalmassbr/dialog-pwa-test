import { User } from '@domain/User/User';
import { UserDTO } from '@domain/User/UserDTO';

export default interface IUserRepository {
  create(user: UserDTO): Promise<User>;
  delete(id: any): Promise<void>;
  findAll(): Promise<User[]>;
  findById(id: any): Promise<User | undefined>;
  findByName(name: string): Promise<User[]>;
  save(user: User): Promise<User>;
}
