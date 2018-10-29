import React, { Component } from 'react';
import {
  SearchWrapper,
  SearchInput,
  SearchPreview,
  Avatar,
  Name,
} from './styles';

class Search extends Component {
  render() {
    return (
      <SearchWrapper>
        <SearchInput />
        <SearchPreview>
          <Avatar
            src="https://i.scdn.co/image/5a06711d7fc48d5e0e3f9a3274ffed3f0af1bd91"
            alt="artist-avatar"
          />
          <Name>
            Metallica
          </Name>
        </SearchPreview>
      </SearchWrapper>
    );
  }
}

export default Search;
