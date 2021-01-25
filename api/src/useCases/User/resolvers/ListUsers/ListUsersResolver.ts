import 'reflect-metadata';
import IUserRepository from '@entities/User/IUserRepository';
import { inject, autoInjectable } from 'tsyringe';
import { User } from '@domain/User/User';
@autoInjectable()
export default class ListUsersResolver {
  constructor(@inject('UsersRepository') private usersRepository: IUserRepository) {}

  async execute() {
    return {
      Query: {
        list: async (_: any, args: any, {}: any): Promise<User[] | []> => {
          const { name } = args;
          let foundUsers: User[];

          if (name) {
            foundUsers = await this.usersRepository.findByName(name);
          } else {
            foundUsers = await this.usersRepository.findAll();
          }

          return foundUsers ? foundUsers : [];
        },
      },
    };
  }
}
