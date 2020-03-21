import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';
import Album from '~/components/Album';

export default function Albums({ albums }) {
  return (
    <>
      <Container>
        {albums.map(album => (
          <Album key={album.id} album={album} />
        ))}
      </Container>
    </>
  );
}

Albums.defaultProps = {
  albums: [],
};

Albums.propTypes = {
  albums: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string,
      image: PropTypes.string,
    })
  ),
};
