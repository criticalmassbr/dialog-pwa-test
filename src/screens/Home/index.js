import React, { useState, useMemo } from 'react';
import { gql } from 'apollo-boost';
import { useLazyQuery } from '@apollo/react-hooks';
import AlbumList from '../../components/AlbumList';
import Artist from '../../components/Artist';
import { Container, Form, Title, Input } from './style';

const GET_ARTIST_ALBUMS = gql`
  query Albums($artist: String) {
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

const Home = () => {
  const [getArtist, { loading, error, data }] = useLazyQuery(GET_ARTIST_ALBUMS);
  const [search, setSearch] = useState('');

  const handleFormSubmit = async e => {
    e.preventDefault();

    if (!search.length) {
      return;
    }

    getArtist({
      variables: {
        artist: search,
      },
    });
  };

  const renderContent = () => {
    if (loading) {
      return <span>Loading...</span>;
    }

    if (error) {
      return <span>{error}</span>;
    }

    if (!data) {
      return null;
    }

    const { image, name, albums } = data.queryArtists[0];

    return (
      <>
        <Artist image={image} name={name} />
        <AlbumList items={albums} />
      </>
    );
  };

  return (
    <Container>
      <Form onSubmit={handleFormSubmit}>
        <Title>Album Finder</Title>
        <Input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search..." />
      </Form>

      {useMemo(renderContent, [loading, error, data])}
    </Container>
  );
};

export default Home;
