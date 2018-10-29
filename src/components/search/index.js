import React from 'react';
import { Wrapper, Input } from './styles';

const Search = ({ onSubmit, defaultValue }) => (
  <Wrapper>
    <Input
      defaultValue={defaultValue}
      onKeyDown={(e) => {
        if (e.keyCode === 13) {
          onSubmit(e);
        }
      }}
    />
  </Wrapper>
);

export default Search;
