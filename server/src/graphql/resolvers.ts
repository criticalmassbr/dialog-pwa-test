import fs from "fs";

const rootQuery = {
	hello: "Hello world",
	message: "server running!",
	status: 200,
};

const list = (): Array<any> => {
	const aux: any = fs.readFileSync("db.json");
	return JSON.parse(aux);
};

export const resolvers = {
	Query: {
		rootQuery: () => rootQuery,
		list: () => list(),
	},
	// Mutations: {...}
};
