/* eslint-disable no-console */
import { ApolloClient, HttpLink, InMemoryCache, concat } from 'apollo-boost';
import { RetryLink } from 'apollo-link-retry';
import { onError } from 'apollo-link-error';
import { toast } from 'react-toastify';

const uri = 'https://spotify-graphql-server.herokuapp.com/graphql';

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      console.log(
        `[GraphQL error]: ${message}, Location: ${locations}, Path: ${path}`
      );
    });
  }

  if (networkError) {
    toast.error('🦄 Wow so easy!', {
      position: 'top-right',
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }
});

const retry = new RetryLink({ attempts: { max: Infinity } });
const http = new HttpLink({ uri });
const link = concat(retry, http).concat(errorLink);

export const cache = new InMemoryCache();

export default new ApolloClient({
  cache,
  link,
});
