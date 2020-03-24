import React, { useState, useContext } from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { useDebounce } from 'use-debounce';

import { Form } from './styles';

import Input from '~/components/Input';
import Result from './Result';
import ArtistContext from '~/contexts/ArtistContext';

const GET_ALBUMS = gql`
  query Albums($artist: String!) {
    queryArtists(byName: $artist) {
      name
      id
      image
      albums {
        name
        id
        image
      }
    }
  }
`;

export default function Search() {
  const [search, setSearch] = useState('');
  const [artistDebounced] = useDebounce(search, 600);

  const { loading, data } = useQuery(GET_ALBUMS, {
    variables: { artist: artistDebounced },
    skip: !artistDebounced,
  });

  const { setArtist } = useContext(ArtistContext);

  function onSelectArtist(artist) {
    setArtist(artist);
    setSearch('');
  }

  return (
    <Form>
      <Input
        name="search"
        placeholder="Search for an artist"
        icon
        onChange={e => setSearch(e.target.value)}
        value={search}
      />

      <Result
        visible={!!search}
        loading={loading}
        artists={data?.queryArtists}
        onSelectArtist={onSelectArtist}
      />
    </Form>
  );
}
