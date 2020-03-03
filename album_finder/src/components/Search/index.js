import React from "react";

import { Container, SearchIcon, SearchInput } from "./styles";

export default function Search({ setSearch, setKeyUp, search }) {
  return (
    <Container>
      <SearchIcon></SearchIcon>
      <SearchInput
        value={search}
        onChange={t => {
          setSearch(t.target.value);
        }}
        placeholder="Search by artist"
      ></SearchInput>
    </Container>
  );
}
