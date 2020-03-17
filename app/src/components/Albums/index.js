import React from 'react';

import { Container } from './styles';
import Album from '../Album';

export default function Albums() {
  return (
    <>
      {/* <h1>albms</h1> */}
      <Container>
        <Album />
        <Album />
        <Album />
        <Album />
        <Album />
      </Container>
    </>
  );
}
