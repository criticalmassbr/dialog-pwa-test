import React, { useState, useMemo, useCallback, useEffect } from 'react';

import { Container, MainName, InputSearch, ArtistContainer } from './styles';

export default function Main() {
  const [search, setSearch] = useState('');

  return (
    <Container>
      <MainName>
        <h2>Album Finder</h2>
      </MainName>
      <InputSearch
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Search"
      />
      <ArtistContainer>
        <img
          src="https://api.adorable.io/avatars/285/abott@adorable.png"
          alt="https://api.adorable.io/avatars/285/abott@adorable.png"
        />
        <span>Artsista</span>
      </ArtistContainer>
    </Container>
  );
}
