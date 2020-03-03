import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  Container,
  ArtistLabel,
  ArtistImage,
  ArtistName,
  AlbumList,
  Message
} from "./styles";

import { MdKeyboardArrowDown } from "react-icons/md";

import AlbumCard from "../../components/AlbumCard";
import Background from "../../components/Background";
import Search from "../../components/Search";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Loading from "../../components/Loading";

export default function Main() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("Search for some artist");

  useEffect(() => {
    setLoading(true);

    async function loadAlbums() {
      const res = await axios({
        url: "https://spotify-graphql-server.herokuapp.com/graphql",
        method: "post",
        data: {
          query: `
          {
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
        }
      `
        }
      });

      // console.log(res.data);

      if (!res.data.errors) {
        setData(res.data.data.queryArtists[0]);
        // console.log(res.data.data.queryArtists[0]);
        // console.log(res.data.data.queryArtists[0].albums);
      } else {
        setData([]);
        // console.log(res.data);
        if (search !== "") setError(String(res.data.errors[0].message));
      }

      setLoading(false);
    }

    setLoading(true);

    const timer = setTimeout(() => {
      if (search !== "") loadAlbums();
    }, 1000);

    return () => {
      clearTimeout(timer);
      setData([]);
      setError("No artist found, try again!");
    };
  }, [search]);

  return (
    <Container>
      <Header>
        <Search search={search} setSearch={setSearch}></Search>
      </Header>
      <Background></Background>
      {search && loading ? (
        <Loading></Loading>
      ) : data && Object.keys(data).length > 0 ? (
        <>
          <ArtistLabel>
            <ArtistImage url={data.image}></ArtistImage>
            <ArtistName>{data.name}</ArtistName>
          </ArtistLabel>
          <MdKeyboardArrowDown size={60} color="#597480"></MdKeyboardArrowDown>
          <AlbumList>
            {data.albums.map(res => {
              return (
                <AlbumCard
                  key={res.id}
                  title={res.name}
                  cover={res.image}
                ></AlbumCard>
              );
            })}
          </AlbumList>
        </>
      ) : (
        <>
          <Message>{error}</Message>
          <Footer></Footer>
        </>
      )}
    </Container>
  );
}
