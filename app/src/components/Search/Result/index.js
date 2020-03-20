import React from 'react';
import PropTypes from 'prop-types';

import Spinner from '~/components/Spinner';

import { Container, Scroll } from './styles';

export default function Result({ loading }) {
  return (
    <Container>
      {loading ? (
        <Spinner />
      ) : (
        <Scroll>
          <p>hey</p>
        </Scroll>
      )}
    </Container>
  );
}

Result.propTypes = {
  loading: PropTypes.bool.isRequired,
};
