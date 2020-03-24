import { ApolloClient, HttpLink, InMemoryCache, concat } from 'apollo-boost';
import { RetryLink } from 'apollo-link-retry';

const uri = 'https://spotify-graphql-server.herokuapp.com/graphql';

const retry = new RetryLink({ attempts: { max: Infinity } });
const http = new HttpLink({ uri });
const link = concat(retry, http);

export const cache = new InMemoryCache();

export default new ApolloClient({
  cache,
  link,
});
