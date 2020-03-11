import React from 'react';
import { Container, Image, Name } from './style';

const Artist = ({ image, name }) => (
  <Container>
    <Image src={image} />
    <Name>{name}</Name>
  </Container>
);

export default Artist;
