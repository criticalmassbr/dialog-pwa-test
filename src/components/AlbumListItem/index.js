import React from 'react';
import PropTypes from 'prop-types';
import { Container, Image, Name } from './style';

const AlbumListItem = ({ image, name }) => (
  <Container>
    <Image src={image} />
    <Name>{name}</Name>
  </Container>
);

AlbumListItem.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default AlbumListItem;
