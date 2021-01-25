import 'reflect-metadata';
import { container } from 'tsyringe';
import MockUsersRepository from '~/entities/User/MockUserRepository';
import IUserRepository from '@entities/User/IUserRepository';

container.registerSingleton<IUserRepository>('UsersRepository', MockUsersRepository);
