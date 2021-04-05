import { useQuery } from 'react-query';
import { GraphQLClient, gql } from 'graphql-request';

const API_URL = `http://localhost:4000/graphql`;
const graphQLClient = new GraphQLClient(API_URL, {});
export function useGetUsers(name: string): any {
  return useQuery(['get-users', name], async () => {
    const { list } = await graphQLClient.request(
      gql`
        query list($name: String) {
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
            greeting
            friends {
              name
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
          }
        }
      `,
      { name },
    );
    return list;
  });
}
