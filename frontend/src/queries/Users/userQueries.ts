
import { gql, useQuery, ApolloClient, NormalizedCacheObject } from '@apollo/client';

//query fragment example
const USER_FRAG = gql`
  fragment userFrag on User {
    index
    picture
    age
    eyeColor
    company
    email
    phone
    greeting
  }
`
const FIND_QUERY = gql`
  ${USER_FRAG}
  query FIND_QUERY($name:String){
    list(name:$name) {
      # id and name could be inside fragment, they are left here as an ilustration of fragment use with other variables
      id
      name
      ...userFrag
      friends {
        id
        name
        ...userFrag
      }
    }
  }
`
export interface User {
  id: string
  index?: number
  picture?: string
  age?: string
  eyeColor?: string
  name?: string
  company?: string
  email?: string
  phone?: string
  friends?: [User]
  greeting?: string
}

//custom react-hook example using useQuery
function useFind({ name }: { name:string }): [User] | null {
  const { loading, error, data } = useQuery(FIND_QUERY, { variables: { name }, });
  if (loading) return null;
  if (error) //example error handling, could be swapped to something that handled and prevented an app crash
    throw new Error(`Failed to fetch users with query:  ${FIND_QUERY}, and variables: ${{ name }}`);
  return data.list;
}

//fetch example using apollo's client directly. for accessibility be used with WithApollo() HoF that inject client into props or apolloConsumer
async function find({ client, name } : { client: ApolloClient<NormalizedCacheObject> , name:string }){
  const { data, loading, error } = await client.query({query:FIND_QUERY, variables:{ name }});
  if(loading) return null;
  if(error) throw new Error("Failed to fetch users");
  return data.list;
}

export { 
  FIND_QUERY,
  useFind,
  find
}