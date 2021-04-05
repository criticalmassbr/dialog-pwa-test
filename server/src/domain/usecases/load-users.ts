import { User } from '@/domain/entities';

export interface LoadUsers {
	load: (name: string) => Promise<User[]>;
}
