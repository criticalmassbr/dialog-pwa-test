import { createServer } from "http";
import express from "express";
import { ApolloServer } from "apollo-server-express";

import { typeDefs, resolvers } from "./graphql/index";

const PORT = 4000;
const app = express();
const httpServer = createServer(app);

const apolloServer = new ApolloServer({
	typeDefs,
	resolvers,
});

const startServer = async () => {
	await apolloServer.start();

	apolloServer.applyMiddleware({
		app,
		path: "/api", // or /graphql
	});
};

export const startServerAndListen = () => {
	startServer();

	httpServer.listen({ port: process.env.PORT || PORT }, () =>
		console.log(
			`Server listening on http://localhost:${PORT}${apolloServer.graphqlPath}`
		)
	);
};
