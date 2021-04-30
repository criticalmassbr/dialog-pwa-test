import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client'

const create = (initialState: NormalizedCacheObject) => {
  return new ApolloClient({
    uri: process.env.REACT_APP_API_URI,
    cache: new InMemoryCache().restore(initialState || {})
  })
}

export default function initApollo(initialState: NormalizedCacheObject) {
  /** TODO: adicionar restauração do cache via service work */
  return create(initialState)
}
