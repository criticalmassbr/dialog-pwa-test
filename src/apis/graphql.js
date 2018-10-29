import config from '~/src/config';

export default class GraphqlAPI {
  static post(query, variables) {
    return fetch(config.GRAPHQL_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, variables }),
    }).then(r => r.json());
  }
}
