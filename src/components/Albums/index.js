import React from 'react';

import { Container, Image, Album, Name } from './styles';

export default function Albums({ data }) {
  return (
    <Container>
      {data.map(album => (
        <Album key={String(album.id)}>
          <Image src={album.image} />
          <Name>{album.name}</Name>
        </Album>
      ))}
    </Container>
  );
}
