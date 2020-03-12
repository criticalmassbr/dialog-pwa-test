import React from 'react'

// Components
import Input from '../Input'
import Results from '../Results'

// Styled
import { SearchWrapper } from './styled'

const Search = ({ search, setSearchValue, data, loading, setArtist }) => (
  <SearchWrapper>
    <Input
      name="search"
      placeholder="search for an artist..."
      value={search}
      onChange={e => setSearchValue(e.target.value)}
    />

    <Results
      queryArtists={data && data.queryArtists}
      loading={loading}
      setArtist={setArtist}
      setSearchValue={setSearchValue}
    />
  </SearchWrapper>
)

export default Search
