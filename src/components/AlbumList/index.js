import React from 'react';
import { Container } from './style';
import AlbumListItem from '../AlbumListItem';

const AlbumList = ({ items }) => (
  <Container>
    {items.map(item => (
      <AlbumListItem key={item.id} item={item} />
    ))}
  </Container>
);

export default AlbumList;
