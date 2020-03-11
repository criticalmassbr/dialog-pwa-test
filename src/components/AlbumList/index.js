import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './style';
import AlbumListItem from '../AlbumListItem';

const AlbumList = ({ items }) => (
  <Container>
    {items.map(({ id, name, image }) => (
      <AlbumListItem key={id} name={name} image={image} />
    ))}
  </Container>
);

AlbumList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

AlbumList.defaultProps = {
  items: [],
};

export default AlbumList;
