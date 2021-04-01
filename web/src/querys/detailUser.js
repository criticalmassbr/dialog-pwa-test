import { gql } from "@apollo/client";

const USERS_DETAL = gql`
query userDetail ($id: String!){
  userDetail (_id: $id) {
    _id
    name
    age
    eyeColor
    company
    email
    picture
    friends {
      _id
      name
      age
      eyeColor
      company
      email
      picture
    }
  }
}
`;

export default USERS_DETAL;
