import { useState, useEffect, useCallback } from "react";

import * as GridStyle from "~/styles/Grid";

import HeaderComponent from "~/components/Header/Header";
import LoadingComponent from "~/components/Loading/Loading";
import AlbumComponent from "~/components/Album/Album";
import SearchComponent from "~/components/Search/Search";

import axios from "axios";

const Index = () => {
  const [setArtists, setArtistsState] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isVisibleSearch, setVisibleSearchState] = useState(false);

  const loadArtists = useCallback(async term => {
    if(term === undefined) {
      term = "Metallica";
    }
    const query = encodeURIComponent(`{
      queryArtists(byName: "${term}") {
        name
        id
        image
        albums {
          name
          id
          image 
        }
      }
    }`);

    try {
      setLoading(true);
      axios(`https://spotify-graphql-server.herokuapp.com/graphql?query=${query}`).then(res => {
        if(res.data.data.queryArtists !== null && res.data.data.queryArtists.length > 0) {
          setArtistsState(res.data.data.queryArtists[0]);
          localStorage.setItem('Artists', JSON.stringify(res.data.data.queryArtists[0]));
        } else {
          console.log('error');
        }
        setVisibleSearchState(false);
      })
      .catch(err => {
        console.log(err);
      });
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  });

  function changeVisibleSearch(param) {
    setVisibleSearchState(param);
  }

  async function searchArtists(term) {
    loadArtists(term);
  }

  useEffect(() => {
    loadArtists();
  }, []);

  return (
    <>
      {loading && <LoadingComponent />}

      <HeaderComponent
        link="/"
        title={`Spotify PWA Test`}
      />

      <div className="mt-65px">
        <GridStyle.Container>
          <GridStyle.Row>
            <GridStyle.Col general={12}>
              <p className="fn-s30px has-text-centered tx-up tx-green">
                Album Finder
              </p>
            </GridStyle.Col>

            <GridStyle.Col general={12}>
              <SearchComponent
                searchArtists={e => searchArtists(e)}
                isVisibleSearch={isVisibleSearch}
                changeVisibleSearch={(e) => changeVisibleSearch(e)}
              />
            </GridStyle.Col>
          </GridStyle.Row>

          <GridStyle.Row>
            <GridStyle.Col desktop={3}/>
            <GridStyle.Col
              mobile={12}
              tablet={12}
              desktop={6}
            >
              <div className="card has-text-centered">
                <GridStyle.Row>
                  <GridStyle.Col
                    mobile={4}
                    tablet={6}
                    desktop={6}
                    className="no-margin"
                  >
                    <img src={setArtists.image} />
                  </GridStyle.Col>
                  <GridStyle.Col
                    mobile={8}
                    tablet={6}
                    desktop={6}
                    className="no-margin"
                  >
                    <p className="tx-up fn-s30px tx-green">
                      {setArtists.name}
                    </p>
                  </GridStyle.Col>
                </GridStyle.Row>
              </div>
            </GridStyle.Col>
            <GridStyle.Col desktop={3}/>
          </GridStyle.Row>

          <GridStyle.Row>
            {setArtists.albums && setArtists.albums.length > 0 &&
              setArtists.albums.map((item, index) => (
                <GridStyle.Col
                  key={index + 1}
                  mobile={12}
                  tablet={4}
                  desktop={3}
                >
                  <AlbumComponent
                    albumProps={item}
                  />
                </GridStyle.Col>
              ))
            }
          </GridStyle.Row>
        </GridStyle.Container>
      </div>
    </>
  );
};

export default Index;
