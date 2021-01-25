import { gql } from '@apollo/client';

export const ALL_USERS = gql`
  {
    list {
      _id
      name
      picture
      age
      eyeColor
      company
      email
      phone
      greeting
      friends {
        _id
        name
        picture
        age
        eyeColor
        company
        email
        phone
      }
    }
  }
`;

export const USERS_BY_NAME = gql`
  query User($name: String!) {
    list(name: $name) {
      _id
      name
      picture
      age
      eyeColor
      company
      email
      phone
      greeting
      friends {
        _id
        name
        picture
        age
        eyeColor
        company
        email
        phone
      }
    }
  }
`;
