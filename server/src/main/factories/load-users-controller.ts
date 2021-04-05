import { LoadUsersController } from '@/presentation/controllers';
import { LoadUsersService } from '@/data/services';
import { UserRepository } from '@/infra/repositories';
import { Controller } from '@/presentation/contracts';

export const makeLoadUsersController = (): Controller => {
	const repo = new UserRepository();
	const loader = new LoadUsersService(repo);
	const controller = new LoadUsersController(loader);
	return controller;
};
