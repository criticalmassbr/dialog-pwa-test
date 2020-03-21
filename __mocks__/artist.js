import { GET_ARTIST_ALBUMS } from '../src/screens/Home';

export const albums = [
  {
    name: 'Live 2012 - O2 Shepherds Bush Empire',
    id: '7K7130jJVwDhA2nQrUt5mI',
    image: 'https://i.scdn.co/image/ab67616d0000b273a042ccc97383a65cd46147e0',
  },
  {
    name: 'Live at High Voltage Festival 2011',
    id: '5C32hd4jdKdRRgpsszegwC',
    image: 'https://i.scdn.co/image/ab67616d0000b2735dffe646df71ff948b4f16b8',
  },
];

export const artist = {
  name: 'Thin Lizzy',
  id: '6biWAmrHyiMkX49LkycGqQ',
  image: 'https://i.scdn.co/image/cbebfb93be8c2ac47ef6b8a2186d11b3298abe49',
  albums,
};

export const artistMock = (queryArtists = [artist]) => ({
  request: {
    query: GET_ARTIST_ALBUMS,
    variables: { name: 'Thin Lizzy' },
  },
  result: {
    data: {
      queryArtists,
    },
  },
});

export const errorMock = () => ({
  request: {
    query: GET_ARTIST_ALBUMS,
    variables: { name: 'ABCDEF' },
  },
  error: new Error('Error'),
});

export const emptyMock = () => ({
  request: {
    query: GET_ARTIST_ALBUMS,
    variables: { name: 'ABCDEF' },
  },
  result: {
    data: {
      queryArtists: [],
    },
  },
});
