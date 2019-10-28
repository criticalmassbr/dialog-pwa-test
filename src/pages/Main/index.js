import React, { useState, useMemo, useEffect } from 'react';
import Albums from '~/components/Albums';
import DB from '~/db.json';

import {
  Container,
  MainName,
  InputSearch,
  ArtistContainer,
  List,
} from './styles';

export default function Main() {
  const [search, setSearch] = useState('');
  const [albuns, setAlbubns] = useState([]);
  const [album] = useState(DB.data.queryArtists[0]);

  useEffect(() => {
    setAlbubns(DB.data.queryArtists[0].albums);
  }, []);

  const foundAlbums = useMemo(() => {
    const Exp = new RegExp(search, 'gi');
    const results = albuns.filter(el => el.name.match(Exp));

    return results;
  }, [albuns, search]);

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
        <img src={album.image} alt={album.iamge} />
        <span>{album.name}</span>
      </ArtistContainer>
      <List>
        <Albums data={foundAlbums} />
      </List>
    </Container>
  );
}
