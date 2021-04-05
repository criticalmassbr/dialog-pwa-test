export class UserUnavailableError extends Error {
	constructor() {
		super('User unavailable');
		this.name = 'UserUnavailableError';
	}
}
