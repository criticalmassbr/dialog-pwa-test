import React from 'react';
import Album from '../Album';
import { IAlbum } from '../Album/types';
import Artist from '../Artist/Artist';
import { Albums } from './styles';

type Props = {
  name: string;
  image: string;
  albums: IAlbum[];
};

function Results({ name, image, albums }: Props) {
  return (
    <>
      <Artist name={name} image={image} />
      <Albums>
        {albums.map(album => (
          <Album key={album.id} {...album} />
        ))}
      </Albums>
    </>
  );
}

export default Results;
