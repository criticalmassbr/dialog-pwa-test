import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query ListUsers{
    list {
      _id
      picture
      age
      eyeColor
      name
      company
      email
    }
  }
`;

export const FindUser = (id: any) => gql`
  query FindUserById {
    detail(_id: "${id}") {
      _id
      name
      picture
      age
      email
      friends {
        _id
        picture
        age
        eyeColor
        name
        company
        email
        phone
      }
    }
  }
`

export const FindByName = (name: any) => gql`
  query FindUserByName{
    list(name: "${name}") {
      _id
      name
      index
      picture
      age
      eyeColor
      company
      email
      phone
      friends {
        _id
        index
        picture
        age
        eyeColor
        name
        company
        email
        phone
      }
      greeting
    }
  }
`;