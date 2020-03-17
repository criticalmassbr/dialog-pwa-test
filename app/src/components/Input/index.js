import React, { useRef, useEffect } from 'react';
import { useField } from '@unform/core';
import PropTypes from 'prop-types';
import { MdSearch } from 'react-icons/md';

import { Container } from './styles';

export default function Input({ name, icon, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue = '', registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <input ref={inputRef} defaultValue={defaultValue} {...rest} />
      {icon && <MdSearch size={20} />}
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
