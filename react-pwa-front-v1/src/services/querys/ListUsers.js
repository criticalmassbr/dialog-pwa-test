
import graphql from 'babel-plugin-relay/macro';

const ListUsersQuery = graphql`
    query ListUsersQuery ($filter: String){
        list (name: $filter){
            _id
            name
            company
            age
            eyeColor
            email
            picture
        }    
    }
    `;

export default ListUsersQuery;