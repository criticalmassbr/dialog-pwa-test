
import graphql from 'babel-plugin-relay/macro';

const getSingleUserByIdQuery = graphql`
    query getSingleUserByIdQuery ($_id: ID){
        user (_id: $_id){
            _id
            name
            age
            email
            picture
            friends {
                _id
                name
                company
                age
                eyeColor
                email
                picture
            }
        }    
    }
    `;

export default getSingleUserByIdQuery;