import { gql } from 'apollo-server'

const typeDefs = gql`
  type User {
    _id: ID!
    name: String!
    picture: String
    email: String
    index: Int
    age: Int
    eyeColor: String
    company: String
    phone: String
    greeting: String
    friends: [User!]!
  }

  type Query {
    list(name: String): [User!]
  }
`

export default typeDefs