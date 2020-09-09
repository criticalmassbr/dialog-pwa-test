import { 
  ApolloClient,
  createHttpLink,
  InMemoryCache
} from '@apollo/client'
import { CachePersistor } from 'apollo-cache-persist'
import { NormalizedCacheObject } from 'apollo-cache-inmemory'
import { PersistentStorage, PersistedData } from 'apollo-cache-persist/types';
const API_HOST = 'http://localhost:4000/graphql'
const SCHEMA_VERSION = '1'
const SCHEMA_VERSION_KEY = 'apollo-schema-version'

const getApolloClient = async () => {
  const httpLink = createHttpLink({
    uri: API_HOST
  });
  const cache = new InMemoryCache()

  const persistor = new CachePersistor({
    cache,
    storage: window.localStorage as PersistentStorage<PersistedData<NormalizedCacheObject>>,
  } as any) //any is used here because of a conflict between cachepersistor and ApolloClient typings

  const currentVersion = window.localStorage.getItem(SCHEMA_VERSION_KEY)

  if (currentVersion === SCHEMA_VERSION) {
    await persistor.restore()
  } else {
    await persistor.purge()
    window.localStorage.setItem(SCHEMA_VERSION_KEY, SCHEMA_VERSION)
  }

  return new ApolloClient({ link: httpLink, cache })
}

export default getApolloClient