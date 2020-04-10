import { useState, useEffect, useCallback } from "react";

import * as GridStyle from '~/styles/Grid';
import {
  FormSearch,
  InputSearch,
  FlagSearch
} from "./SearchStyle";

import Suggestions from '~/components/Search/Suggestions';

import axios from "axios";

const searchArtists = (props) => {
  const [textSearch, setText] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [isVisible, setVisible] = useState(false);
  const [inFocus, setFocus] = useState(false);

  const [state, setState] = useState({
    query: '',
    results: []
  });

  const handleSearch = useCallback(async (text) => {
    if(text.length > 2) {
      const query = encodeURIComponent(`{
        queryArtists(byName: "${text}") {
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
        axios(`https://spotify-graphql-server.herokuapp.com/graphql?query=${query}`)
          .then(({ data }) => {
            setState({
              results: data.data.queryArtists
            })
          })
      } catch (error) {
        console.log(error);
      }
    }
  });

  const onClickSearch = () => {
    redirectSearch(textSearch);
  };

  const redirectSearch = (text) => {
    if (!text || text.length < 3) return;
    handleSearch(text);
  };

  function changePropsVisibleSearch(param) {
    props.changeVisibleSearch(param);
  }

  useEffect(() => {
    let searchTimer = setTimeout(() => {
      handleSearch(textSearch);
    }, 150);
    return () => clearTimeout(searchTimer);
  }, [textSearch]);

  return (
    <>
      <FormSearch className="w-100 flex">
        <GridStyle.Row className="no-gutters w-100">
          <GridStyle.Col className="no-margin no-padding" general={12}>
            <GridStyle.Row>
              <GridStyle.Col className="no-margin" general={9}>
                <InputSearch
                  placeholder="Search your Artists"
                  value={textSearch}
                  name="query"
                  className="fn-s14px ln-h19px"
                  onKeyPress={(e) => e.key === "Enter" && onClickSearch()}
                  onChange={(e) => setText(e.target.value)}
                  onBlur={() => !inFocus && changePropsVisibleSearch(false)}
                  onFocus={() => changePropsVisibleSearch(true)}
                />
              </GridStyle.Col>

              <GridStyle.Col className="no-margin" general={3}>
                <FlagSearch />
              </GridStyle.Col>
            </GridStyle.Row>
          </GridStyle.Col>

          <div
            className="black-block"
            onClick={() => setVisible(false) && changePropsVisibleSearch(false)}
          />

          {typeof state.query === "undefined" &&
            state.results &&
            state.results.length >= 1 &&
            props.isVisibleSearch === true && (
              <GridStyle.Col
                className="no-margin no-padding"
                general={12}
                onMouseEnter={() => setFocus(true)}
                onMouseLeave={() => setFocus(false)}
              >
                <Suggestions
                  results={state.results}
                  searchArtists={props.searchArtists}
                  textSearch={textSearch}
                />
              </GridStyle.Col>
            )}
        </GridStyle.Row>
      </FormSearch>
    </>
  )
};

export default searchArtists;
