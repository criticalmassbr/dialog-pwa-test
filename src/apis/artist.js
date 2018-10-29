import GraphqlApi from '~/src/apis/graphql';

export default class ArtistApi {
  static fetchArtistIdsByName(query) {
    return GraphqlApi.post(`
      query {
        queryArtists(byName: "${query}") {
          id
        }
      }
    `)
      .then(r => (r.data.queryArtists || []));
  }

  static fetchArtistByName(query) {
    return GraphqlApi.post(`
      query {
        queryArtists(byName: "${query}") {
          name
          id
          image
          albums {
            name
            id
            image
          }
        }
      }
    `)
      .then(r => (r.data.queryArtists || []));
  }
}
