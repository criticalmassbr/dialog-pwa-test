/* eslint-disable import/export */
/* eslint-disable no-redeclare */
import {
	Controller,
	HttpResponse,
	serverError,
	ok,
} from '@/presentation/contracts';
import { LoadUsers } from '@/domain/usecases';
import { User } from '../../domain/entities/user';

export class LoadUsersController implements Controller {
	constructor(private readonly loadUsers: LoadUsers) {}

	async handle(
		request: LoadUsersController.Request,
	): Promise<HttpResponse<User[]>> {
		try {
			const users = await this.loadUsers.load(request.name);
			return ok(users);
		} catch (error) {
			return serverError(error);
		}
	}
}
export namespace LoadUsersController {
	export type Request = {
		name: string;
	};
}
