import {
  ApolloClient,
  createHttpLink,
  InMemoryCache
} from '@apollo/client'
import { NormalizedCacheObject } from 'apollo-cache-inmemory'
import { CachePersistor } from 'apollo-cache-persist'
import { PersistedData, PersistentStorage } from 'apollo-cache-persist/types';

const SCHEMA_VERSION = '1'
const SCHEMA_VERSION_KEY = 'apollo-schema-version'
const currentVersion = window.localStorage.getItem(SCHEMA_VERSION_KEY)

const initiateApolloClient = async () => {
  const cache = new InMemoryCache()
  const httpLink = createHttpLink({
    uri: 'http://localhost:4000/graphql'
  });
  const persistor = new CachePersistor({
    cache,
    storage: window.localStorage as PersistentStorage<PersistedData<NormalizedCacheObject>>,
  } as any)

  if (currentVersion === SCHEMA_VERSION) {
    await persistor.restore()
  } else {
    await persistor.purge()
    window.localStorage.setItem(SCHEMA_VERSION_KEY, SCHEMA_VERSION)
  }

  return new ApolloClient({ link: httpLink, cache })
}

export default initiateApolloClient