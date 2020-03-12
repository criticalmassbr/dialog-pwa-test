import gql from 'graphql-tag'

export const GET_ALBUMS = gql`
  query SearchArtist($name: String!) {
    queryArtists(byName: $name) {
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
`
