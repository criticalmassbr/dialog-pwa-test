export type User = {
	_id: string;
	index: number;
	age: number;
	picture: string;
	eyeColor: string;
	name: string;
	company: string;
	email: string;
	phone: string;
	greeting: string;
	friends: User[];
};
