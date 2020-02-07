import React from 'react';

import { IAlbum } from '../../store/ducks/artists/types';

import { Container, List, Item, Image, Name } from './styles';

interface IAlbuns {
  albums: IAlbum[];
}

const ListAlbuns: React.FC<IAlbuns> = ({ albums }) => {
  return (
    <Container>
      <List>
        {albums.map((album: IAlbum) => (
          <Item key={album.id}>
            <Image src={album.image} alt={album.name} />
            <Name>{album.name}</Name>
          </Item>
        ))}
      </List>
    </Container>
  );
};

export default ListAlbuns;
