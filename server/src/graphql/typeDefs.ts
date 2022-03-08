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
