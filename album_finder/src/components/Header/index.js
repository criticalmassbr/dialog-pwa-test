import React from "react";

import { Container, Title } from "./styles";

export default function Header({ children }) {
  return (
    <Container>
      <Title>Album Finder</Title>
      {children}
    </Container>
  );
}
