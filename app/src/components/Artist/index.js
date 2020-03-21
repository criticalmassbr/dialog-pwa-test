import React from 'react';
import PropTypes from 'prop-types';

import { Container, Avatar, Info } from './styles';

export default function Artist({ artist }) {
  return (
    <Container>
      <Avatar>
        <img
          src={
            artist.image ||
            'https://i.scdn.co/image/5a06711d7fc48d5e0e3f9a3274ffed3f0af1bd91'
          }
          alt="Avatar"
        />
      </Avatar>
      <Info>
        <h1>{artist.name}</h1>
        <span>artist</span>
      </Info>
    </Container>
  );
}

Artist.propTypes = {
  artist: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};
