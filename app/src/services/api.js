import ApolloClient from 'apollo-boost';

export default new ApolloClient({
  uri: 'https://spotify-graphql-server.herokuapp.com/graphql',
});
