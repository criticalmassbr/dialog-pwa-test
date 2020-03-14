import axios from 'axios';

export async function fetchByName(artist: string) {
  const response = await axios.get('https://spotify-graphql-server.herokuapp.com/graphql', {
    params: {
      query: `{
          queryArtists(byName: "${artist}") {
          name
          id
          image
          albums {
            name
            id
            image
          }
        }
      }`,
    },
  });
  return response.data;
}
