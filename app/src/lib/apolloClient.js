import ApolloClient from 'apollo-boost'

export const client = new ApolloClient({
  uri: 'https://spotify-graphql-server.herokuapp.com/graphql'
})
