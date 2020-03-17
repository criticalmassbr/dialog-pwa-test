import React from 'react';

import { Container } from './styles';

import Header from '~/components/Header';
import Search from '~/components/Search';
import Artist from '~/components/Artist';
import Albums from '~/components/Albums';

export default function Home() {
  return (
    <Container>
      <Header />
      <Search />

      <Artist />

      {/* <Separator /> */}

      <Albums />
    </Container>
  );
}
