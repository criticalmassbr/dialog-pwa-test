import { Express } from 'express';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from '@/main/graphql/type-defs';
import resolvers from '@/main/graphql/resolvers';

export const setupApolloServer = (app: Express): void => {
	const server = new ApolloServer({ resolvers, typeDefs });
	server.applyMiddleware({ app });
};
