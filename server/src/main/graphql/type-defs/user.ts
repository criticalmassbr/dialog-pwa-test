import { gql } from 'apollo-server-express';

export default gql`
	extend type Query {
		list(name: String): [User!]
	}
	type User {
		_id: String
		index: Int
		picture: String
		age: Int
		eyeColor: String
		name: String
		company: String
		email: String
		phone: String
		friends: [User]
		greeting: String
	}
`;
