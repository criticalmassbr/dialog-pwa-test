import { UserModel } from '@/data/models';

export interface LoadUsersRepository {
	loadUsers: (name: string) => Promise<UserModel[]>;
}
