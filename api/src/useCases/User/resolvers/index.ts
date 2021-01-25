import 'reflect-metadata';
import { container } from 'tsyringe';
import ListUsersResolvers from './ListUsers/ListUsersResolver';
import MockUsersRepository from '@entities/User/MockUserRepository';

export default class Resolvers {
  async getResolvers() {
    const userResolver = new ListUsersResolvers(new MockUsersRepository());
    const dependenciesResolvedUserResolver = await userResolver.execute();

    return { users_list: dependenciesResolvedUserResolver };
  }
}
