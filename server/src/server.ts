import { createServer } from "http";
import express from "express";
import { ApolloServer } from "apollo-server-express";

import { typeDefs, resolvers } from "./graphql/index";
import { myPlugin } from "./apollo/myLogPlugin";

const PORT = 4000;
const app = express();
const httpServer = createServer(app);

const apolloServer = new ApolloServer({
	typeDefs,
	resolvers,
	plugins: [myPlugin],
});

const startServer = async () => {
	// var myLogger = function (req: Request, res: Response, next: NextFunction) { // middleware
	// 	console.log("LOGGED");
	// 	console.log("response");
	// 	console.log(res);
	// 	next();
	// };
	// app.use(myLogger)

	await apolloServer.start();

	apolloServer.applyMiddleware({
		app,
		path: "/api"
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
