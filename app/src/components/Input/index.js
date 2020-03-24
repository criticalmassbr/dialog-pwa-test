import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { MdSearch } from 'react-icons/md';

import { Container, Input as StyledInput } from './styles';

export default function Input({ name, icon, ...rest }) {
  const inputRef = useRef(null);

  return (
    <Container>
      <StyledInput ref={inputRef} {...rest} />
      {icon && <MdSearch size={26} color="#7159c1" />}
    </Container>
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.bool,
};

Input.defaultProps = {
  icon: false,
};
