const rootQuery = {
	hello: "Hello world",
	message: "server running!",
	status: 200,
};


export const resolvers = {
	Query: {
		rootQuery: () => rootQuery,
	},
	// Mutations: {...}
};
