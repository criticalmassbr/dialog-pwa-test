import React from 'react';

import { Container } from './styles';

interface Props {
  children: any
}

const Button: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  );
}

export default Button;