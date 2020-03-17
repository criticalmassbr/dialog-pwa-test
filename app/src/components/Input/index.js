import React, { useRef, useEffect, useContext } from 'react';
import { useField } from '@unform/core';
import PropTypes from 'prop-types';
import { MdSearch } from 'react-icons/md';
import { ThemeContext } from 'styled-components';

import { Container, Input as StyledInput } from './styles';

export default function Input({ name, icon, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue = '', registerField } = useField(name);

  const { colors } = useContext(ThemeContext);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <StyledInput ref={inputRef} defaultValue={defaultValue} {...rest} />
      {icon && <MdSearch size={26} color={colors.secondary} />}
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
