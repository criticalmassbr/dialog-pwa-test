import React from 'react';

import Album from '../Album/index.jsx';

import {
  Container,
} from './styles';

function Albuns ({ artist }) {
  return (
    <Container>
      {artist.albums.map((album) => (
        <Album key={album.id} album={album} />
      ))}
    </Container>
  )
}

export default Albuns
