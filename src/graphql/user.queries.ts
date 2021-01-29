import gql from "graphql-tag"

const QUERY_SEARCH_USERS = gql`
  query ListarUsuarios($name: String) {
        list(name:$name){
            _id
            picture
            age
            name
            eyeColor
            email
            company
            friends{
                _id picture age name eyeColor email company
            }
        }
    }
`;

const QUERY_SEARCH_BY_ID = gql`
  query SearchById($id: String!) {
        searchById(id:$id){
            _id picture age name company email 
            friends{
                _id picture age name eyeColor email company
            }
        }
    }
`;

export default { QUERY_SEARCH_USERS, QUERY_SEARCH_BY_ID }