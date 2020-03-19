import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './style';
import AlbumListItem from '../AlbumListItem';

const AlbumList = ({ albums }) => (
  <Container>
    {albums.map(({ id, name, image }) => (
      <AlbumListItem key={id} name={name} image={image} />
    ))}
  </Container>
);

AlbumList.propTypes = {
  albums: PropTypes.arrayOf(PropTypes.object),
};

AlbumList.defaultProps = {
  albums: [],
};

export default AlbumList;
