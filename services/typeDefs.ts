import { gql } from 'apollo-server'

const typeDefs = gql`
  type Friend {
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
    friends: [Friend!]!
  }

  type Query {
    list(name: String): [Friend!]
  }
`

export default typeDefs