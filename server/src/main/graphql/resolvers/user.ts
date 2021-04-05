import { adaptResolver } from '@/main/adapters';
import { makeLoadUsersController } from '@/main/factories';

export default {
	Query: {
		list: async (_, args, {}): Promise<any> => {
			return adaptResolver(makeLoadUsersController(), args);
		},
	},
};
