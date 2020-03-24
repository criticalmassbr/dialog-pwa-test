import React from 'react';
import { Offline } from 'react-detect-offline';

import { Container } from './styles';

export default function OfflineBar() {
  return (
    <Offline>
      <Container>
        <span>You are running now in offline mode</span>
      </Container>
    </Offline>
  );
}
