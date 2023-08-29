import { ApolloClient, InMemoryCache } from '@apollo/client';

// const client = new ApolloClient({
//   uri: 'http://localhost:4000/graphql',
//   cache: new InMemoryCache(),
// });
// export default client;

const cache = new InMemoryCache();

const storedData = localStorage.getItem('myApolloData');
if (storedData) {
  cache.restore(JSON.parse(storedData));
}

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache,
});

window.addEventListener('beforeunload', () => {
  localStorage.setItem('myApolloData', JSON.stringify(cache.extract()));
});

export default client;





