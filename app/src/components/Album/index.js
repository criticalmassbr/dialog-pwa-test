import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';

import { Container, Player } from './styles';
import { size } from '~/styles/sizes';

export default function Album({ album }) {
  const [hovering, setHovering] = useState(false);
  const { title } = useContext(ThemeContext);

  const { innerWidth } = window;

  return (
    <Container
      border={title === 'light'}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      href={`https://open.spotify.com/album/${album.id}`}
    >
      <div>
        <img src={album.image} alt="Album Folder" />
      </div>
      <span>{album.name}</span>
      <Player visible={hovering || innerWidth < size.mobileL} size={40} />
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
