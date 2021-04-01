import React, { useState } from 'react';
import { SearchInput } from './styles';

export default function Search( {  setUserSearch } ) {
  const [value, setValue] = useState('');

  return (
    <SearchInput>
      <input
        value={value}
        onChange={e => setValue(e.currentTarget.value)}
        type="text"
        placeholder="search"
        onKeyDown={event => {
          if (event.key === 'Enter') {
            setUserSearch(value)
          }
        }}
      />
    </SearchInput>
  )
}


