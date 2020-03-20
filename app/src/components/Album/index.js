import React, { useState } from 'react';

import { Container, Player } from './styles';

export default function Album() {
  const [hovering, setHovering] = useState(false);

  return (
    <Container
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div>
        <img
          src="https://i.scdn.co/image/ab67616d0000b2730baa189d8d5e6ca03a5adfed"
          alt="Album Folder"
        />
      </div>
      <span>Visionary Powers</span>
      {hovering && <Player size={40} />}
    </Container>
  );
}
