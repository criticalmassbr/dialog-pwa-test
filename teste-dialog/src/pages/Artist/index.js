import React from "react";

import Search from "../../Components/Search";
import PhotoArtist from "../../Components/PhotoArtist";
import ListMusics from "../../Components/ListMusics";

import { Container, Text } from "./styles";

export default function Artist() {
  return (
    <Container>
      <Text>Repositório de Artistas</Text>
      <Search />
      <PhotoArtist />
      <ListMusics />
    </Container>
  );
}
