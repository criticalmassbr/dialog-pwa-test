import React from 'react';
import {
  ListWrapper,
  Album,
  Cover,
  Title,
} from './styles';

const AlbumList = ({ albums }) => (
  <ListWrapper>
    {albums.map(album => (
      <Album key={album.id}>
        <Cover src={album.image} />
        <Title>{album.name}</Title>
      </Album>
    ))}
  </ListWrapper>
);

export default AlbumList;
