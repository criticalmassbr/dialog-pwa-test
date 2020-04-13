import React from 'react';

import { Container } from './styles';

export default function Card({ album }) {
  return (
    <Container>
      <img src={album.image} alt="Album" />
      <h3>{album.name}</h3>
    </Container>
  );
}
