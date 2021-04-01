import { gql } from "@apollo/client";

const SEARCH_USERS = gql`
query SearchUsers ($name: String!){
  SearchUsers (name: $name) {
    _id
    name
    age
    eyeColor
    company
    email
    picture
  }
}
`;

export default SEARCH_USERS;
