import React, { useState } from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { useDebounce } from 'use-debounce';

import { Form } from './styles';

import Input from '~/components/Input';
import Result from './Result';

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

  const [artist] = useDebounce(search, 1000);

  function handleSubmit() {}

  const { loading } = useQuery(GET_ALBUMS, {
    variables: { artist },
    skip: !artist,
  });

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        name="search"
        placeholder="Search for an artist"
        icon
        onChange={e => setSearch(e.target.value)}
      />

      <Result loading={loading} />
    </Form>
  );
}
