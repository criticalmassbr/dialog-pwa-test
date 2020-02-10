import React from "react";

import Search from "../../Components/Search";
import PhotoArtist from "../../Components/PhotoArtist";
import ListMusics from "../../Components/ListMusics";

import { Container } from "./styles";

export default function Artist() {
  return (
    <Container>
      <Search />
      <PhotoArtist />
      <ListMusics />
    </Container>
  );
}
