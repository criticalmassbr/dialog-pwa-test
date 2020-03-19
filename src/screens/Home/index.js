import React, { useState, useMemo } from 'react';
import { gql } from 'apollo-boost';
import { useLazyQuery } from '@apollo/react-hooks';
import AlbumList from '../../components/AlbumList';
import Artist from '../../components/Artist';
import SearchForm from '../../components/SearchForm';
import { Container, Message } from './style';

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

  /**
   * Handles the form submission
   * @param {Object} e Event object
   */
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

  /**
   * Returns the search form component
   */
  const renderSearchForm = () => (
    <SearchForm onSubmit={handleFormSubmit} search={search} onSearchUpdate={setSearch} />
  );

  /**
   * Returns the correct content
   */
  const renderContent = () => {
    if (loading) {
      return <Message>Loading...</Message>;
    }

    if (error) {
      return <Message>{error}</Message>;
    }

    if (!data) {
      return null;
    }

    const { queryArtists } = data;

    if (!queryArtists.length) {
      return <Message>No results found for &quot;{search}&quot;</Message>;
    }

    const { image, name, albums } = queryArtists[0];

    return (
      <>
        <Artist image={image} name={name} />
        <AlbumList albums={albums} />
      </>
    );
  };

  return (
    <Container>
      {useMemo(renderSearchForm, [search, setSearch])}
      {useMemo(renderContent, [loading, error, data])}
    </Container>
  );
};

export default Home;
