import { gql } from "apollo-server-express";

export const typeDefs = gql`
	type Query {
		hello: String
		message: String
		status: Int
	}
`;

export const resolvers = {
	Query: {
		hello: () => "Hello world",
		message: () => "server running!",
		status: () => 200,
	},
};
