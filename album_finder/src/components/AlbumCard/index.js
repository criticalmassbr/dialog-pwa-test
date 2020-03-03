import React from "react";

import { Container, Cover, Title, Divider } from "./styles";

export default function AlbumCard({ cover, title }) {
  return (
    <Container>
      <Cover src={cover}></Cover>
      <Divider></Divider>
      <Title>{title}</Title>
    </Container>
  );
}
