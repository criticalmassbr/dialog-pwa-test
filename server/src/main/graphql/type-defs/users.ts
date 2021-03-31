import { gql } from 'apollo-server-express'

export default gql`
extend type Query {
  users: [User!]!
  userDetail(_id: String): User
  SearchUsers(name: String): [User!]!
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
  friends: [Friend!]
  greeting: String
}

type Friend {
  _id: String
  index: Int
  picture: String
  age: Int
  eyeColor: String
  name: String
  company: String
  email: String
  phone: String
}
`



