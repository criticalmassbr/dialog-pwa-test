import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache
} from '@apollo/client'

import { NormalizedCacheObject } from 'apollo-cache-inmemory'
import { CachePersistor } from 'apollo-cache-persist'
import { PersistedData, PersistentStorage } from 'apollo-cache-persist/types';

const SCHEMA_VERSION = '1';
const SCHEMA_VERSION_KEY = 'apollo-schema-version';
const currentVersion = window.localStorage.getItem(SCHEMA_VERSION_KEY);

const cache = new InMemoryCache();

const persistor = new CachePersistor({
  cache,
  storage: window.localStorage as PersistentStorage<PersistedData<NormalizedCacheObject>>,
} as any);

if (currentVersion === SCHEMA_VERSION) {
  persistor.restore().then();
} else {
  persistor.purge().then();
  window.localStorage.setItem(SCHEMA_VERSION_KEY, SCHEMA_VERSION);
}


const apolloClient = new ApolloClient({
  cache,
  link: new HttpLink({
    uri: 'http://localhost:4000/graphql'
  }),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
