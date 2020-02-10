import React from "react";
import { MdSearch } from "react-icons/md";

import { Container, DivSearch, InputSearch, AlignIcon } from "./styles";

export default function Search() {
  return (
    <Container>
      <DivSearch>
        <InputSearch placeholder="Busque músicas, artistas, podcasts..." />
      </DivSearch>
      <AlignIcon>
        <MdSearch size={26} color="#000" />
      </AlignIcon>
    </Container>
  );
}
