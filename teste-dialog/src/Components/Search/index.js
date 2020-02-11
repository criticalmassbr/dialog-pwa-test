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
          <AlignIcon>
            <MdSearch size={26} color="#fff" />
          </AlignIcon>
          <LabelSearch>
            <InputSearch placeholder="Busque músicas, artistas, podcasts..." />
          </LabelSearch>
        </DivSearch>
      </FormContainer>
    </Container>
  );
}
