import React from 'react';

import {
  Container,
  ArtistImage,
  ArtistName,
} from './styles';

function Artist ({ artist }) {
  return (
    <Container>
      <ArtistImage src={ artist.image } />
      <ArtistName>
        { artist.name }
      </ArtistName>
    </Container>
  );
}

export default Artist;
