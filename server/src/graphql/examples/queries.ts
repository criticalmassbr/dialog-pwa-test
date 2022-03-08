import { gql } from "apollo-server-express";

export const typeDefs = gql`
	type RootQuery {
		hello: String
		message: String
		status: Int
	}

  type Query {
    rootQuery: RootQuery
  }
`;

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
