import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { persistCache } from 'apollo-cache-persist';
import * as serviceWorker from './serviceWorker';
import { GlobalStyle } from './style';
import Home from './screens/Home';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'https://spotify-graphql-server.herokuapp.com/graphql',
});

persistCache({
  cache,
  storage: window.localStorage,
});

const client = new ApolloClient({
  link,
  cache,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <GlobalStyle />
    <Home />
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
