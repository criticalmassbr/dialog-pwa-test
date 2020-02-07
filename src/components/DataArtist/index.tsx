import React from 'react';

import { IArtist } from '../../store/ducks/artists/types';

import { Container, Artist, Image, Name } from './styles';

interface IData {
  data: IArtist;
}

const DataArtist: React.FC<IData> = ({ data }) => {
  return (
    <Container>
      <Artist>
        <Image src={data.image} alt={data.name} />
        <Name>{data.name}</Name>
      </Artist>
    </Container>
  );
};

export default DataArtist;
