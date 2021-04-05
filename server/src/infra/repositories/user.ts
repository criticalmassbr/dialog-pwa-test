/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import { LoadUsersRepository } from '@/data/contracts';
import { users } from '@/infra/data-sources';
import { UserInfraModel } from '@/infra/models/user';

export class UserRepository implements LoadUsersRepository {
	async loadUsers(name: string): Promise<UserInfraModel[]> {
		if (!name) {
			return users;
		}
		const appendedNameQuery = name.toUpperCase().split(' ');
		const usersFiltered = users.filter((user) => {
			const appendedNameUser = user?.name
				?.replace(/[^A-Za-z0-9_'-]/gi, '')
				.toUpperCase();
			if (appendedNameQuery.some((v) => appendedNameUser.includes(v))) {
				return user;
			}
		});
		return usersFiltered;
	}
}
