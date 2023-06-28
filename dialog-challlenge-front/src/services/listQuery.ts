import { gql } from '@apollo/client';

export const LIST_QUERY = gql`
  query ListUsers($name: String) {
    list(name: $name) {
      _id
      index
      picture
      age
      eyeColor
      name
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
