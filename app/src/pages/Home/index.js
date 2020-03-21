import React, { useState } from 'react';

import { Container, WaitForSearch } from './styles';

import Header from '~/components/Header';
import Search from '~/components/Search';
import Artist from '~/components/Artist';
import Albums from '~/components/Albums';

import ArtistContext from '~/contexts/ArtistContext';

export default function Home() {
  const [artist, setArtist] = useState({});

  const emptyArtist = !Object.keys(artist).length;

  return (
    <Container>
      <ArtistContext.Provider value={{ artist, setArtist }}>
        <Header />
        <Search />

        {!emptyArtist ? (
          <>
            <Artist artist={artist} />
            <Albums albums={artist?.albums} />
          </>
        ) : (
          <WaitForSearch>Select an artist</WaitForSearch>
        )}
      </ArtistContext.Provider>
    </Container>
  );
}
