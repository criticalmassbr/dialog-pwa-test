import React from 'react';
import { Container, Avatar, Info } from './styles';

export default function Artist() {
  return (
    <Container>
      <Avatar>
        <img
          src="https://i.scdn.co/image/5a06711d7fc48d5e0e3f9a3274ffed3f0af1bd91"
          alt="Avatar"
        />
      </Avatar>
      <Info>
        <h1>Metallica</h1>
        <span>artist</span>
      </Info>
    </Container>
  );
}
