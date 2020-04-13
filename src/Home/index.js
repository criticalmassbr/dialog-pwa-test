import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import Card from 'components/Card';
import { Container, SearchContainer, Artist, AlbumContainer } from './styles';

import { FaSearch } from 'react-icons/fa';
import Loading from 'components/Loading';

const GET_ALBUNS = gql`
  {
    queryArtists(byName: "Metallica") {
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

function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchAlbums, setSearchAlbums] = React.useState([]);
  const { loading, error, data } = useQuery(GET_ALBUNS);

  const artist = data && data.queryArtists[0];
  console.log(data);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const results =
      artist &&
      artist.albums.filter((album) =>
        album.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    if (results) {
      setSearchAlbums(results);
    }
  }, [searchTerm, artist]);

  if (loading)
    return (
      <p>
        <Loading />
      </p>
    );
  if (error) return <p>Error</p>;

  return (
    <Container>
      <h1>Album Finder</h1>
      <SearchContainer>
        <FaSearch />
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
        />
      </SearchContainer>
      <Artist>
        <img src={artist.image} alt={artist.name} />
        <h2>{artist.name}</h2>
      </Artist>

      <AlbumContainer>
        {searchAlbums.map((album) => (
          <Card album={album} key={album.id} />
        ))}
      </AlbumContainer>
    </Container>
  );
}

export default Home;
