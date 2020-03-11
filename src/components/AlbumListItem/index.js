import React from 'react';
import { Container, Image, Name } from './style';

const AlbumListItem = ({ item }) => (
  <Container>
    <Image src={item.image} />
    <Name>{item.name}</Name>
  </Container>
);

export default AlbumListItem;
