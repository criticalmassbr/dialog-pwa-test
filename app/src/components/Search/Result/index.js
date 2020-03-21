import React from 'react';
import PropTypes from 'prop-types';

import Spinner from '~/components/Spinner';

import { Container, Scroll, ArtistsList } from './styles';

export default function Result({ visible, loading, artists, onSelectArtist }) {
  return (
    <Container visible={visible}>
      {loading ? (
        <Spinner />
      ) : (
        <Scroll>
          <ArtistsList>
            {artists.map(artist => (
              <button
                type="button"
                key={artist.id}
                onClick={() => onSelectArtist(artist)}
              >
                <img alt="Artist" src={artist.image} />
                <span>{artist.name}</span>
              </button>
            ))}
          </ArtistsList>
        </Scroll>
      )}
    </Container>
  );
}

Result.defaultProps = {
  artists: [],
};

Result.propTypes = {
  loading: PropTypes.bool.isRequired,
  visible: PropTypes.bool.isRequired,
  onSelectArtist: PropTypes.func.isRequired,
  artists: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string,
      image: PropTypes.string,
      albums: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
          id: PropTypes.string,
          image: PropTypes.string,
        })
      ),
    })
  ),
};
