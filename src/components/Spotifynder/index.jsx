import React, { useState } from 'react';
import axios from 'axios';
import Header from '../Header/index';
import Artist from '../Artist/index.jsx';
import Albuns from '../Albums';
import Loading from '../Loading/index.jsx';

import {
  Label,
  Container,
  MarginWrapper,
} from './styles';

function Spotifynder () {
  const [artist, setArtist] = useState(null);
  const [loading, setLoading] = useState(false);
  const [researched, setResearched] = useState(false);
  
  const generateQuery = (search) => {
    return encodeURIComponent(
      `{
        queryArtists(byName: "${search}") {
          name
          id
          image
          albums {
            name
            id
            image 
          }
        }
      }`
    );
  };

  const onSearch = (search) => {
    const config = {
      method: 'GET',
      url: `https://spotify-graphql-server.herokuapp.com/graphql?query=${generateQuery(search)}`,
    };

    setLoading(true);
    axios(config)
      .then(({ data: { data } }) => {
        const { queryArtists } = data;

        if (queryArtists) {
          setArtist(queryArtists[0]);
        }
      })
      .catch(() => setArtist(null))
      .finally(() => {
        if (!researched) {
          setResearched(true);
        }

        setLoading(false);
      });
  };

  const Content = () => {
    if (loading) {
      return (
        <MarginWrapper>
          <Loading />
        </MarginWrapper>
      )
    } else if (!artist && !researched) {
      return (
        <MarginWrapper>
          <Label>
            Busque por artistas
          </Label>
        </MarginWrapper>
      )
    } else if (!artist && researched) {
      return (
        <MarginWrapper>
          <Label>
            Nenhum artista encontrado :(
          </Label>
        </MarginWrapper>
      )
    } else if (artist) {
      return (
        <>
          <Artist artist={artist} />
          <Albuns artist={artist} />
        </>
      )
    }
  };

  return (
    <Container>
      <Header onSearch={onSearch} />
      <Content />
    </Container>
  );
}

export default Spotifynder;