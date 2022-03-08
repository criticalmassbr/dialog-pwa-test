import { gql } from "apollo-server-express";

export const typeDefs = gql`
	type RootQuery {
		hello: String
		message: String
		status: Int
	}

	type Friends {
		_id: ID!
		index: Int!
		picture: String!
		age: Int!
		eyeColor: String!
		name: String!
		company: String!
		email: String!
		phone: String!
	}

	type User {
		_id: ID!
		index: Int!
		picture: String!
		age: Int!
		eyeColor: String!
		name: String!
		company: String!
		email: String!
		phone: String!
		friends: [Friends!]!
		greeting: String!
	}

	type Query {
		rootQuery: RootQuery
		list(name: String): [User]!
	}
`;
