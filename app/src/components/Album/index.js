import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';

import { Container, Player } from './styles';

export default function Album({ album }) {
  const [hovering, setHovering] = useState(false);
  const { title } = useContext(ThemeContext);

  return (
    <Container
      border={title === 'light'}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div>
        <img src={album.image} alt="Album Folder" />
      </div>
      <span>{album.name}</span>
      {hovering && <Player size={40} />}
    </Container>
  );
}

Album.propTypes = {
  album: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};
