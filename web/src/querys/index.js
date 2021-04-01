import { gql } from "@apollo/client";

const LIST_USERS = gql`
query users {
  users {
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

export default LIST_USERS;
