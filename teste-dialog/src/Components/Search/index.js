import React from "react";
import { MdSearch } from "react-icons/md";

import {
  Container,
  DivSearch,
  InputSearch,
  AlignIcon,
  FormContainer,
  LabelSearch
} from "./styles";

export default function Search() {
  return (
    <Container>
      <FormContainer>
        <DivSearch>
          <LabelSearch>
            <InputSearch placeholder="Busque músicas, artistas, podcasts..." />
          </LabelSearch>
          <AlignIcon>
            <MdSearch size={26} color="#000" />
          </AlignIcon>
        </DivSearch>
      </FormContainer>
    </Container>
  );
}
