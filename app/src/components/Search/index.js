import React, { useState } from 'react'
import { ReactSVG } from 'react-svg'

// Components
import Input from '../Input'

// Styled
import { SearchWrapper } from './styled'

function Search() {
  const [search, setSearchValue] = useState('')

  return (
    <SearchWrapper>
      <Input
        name="search"
        placeholder="search for an artist..."
        value={search}
        onChange={e => setSearchValue(e.target.value)}
      />

      <button type="submit">
        <ReactSVG src="/assets/svg/search.svg" className="icon" />
      </button>
    </SearchWrapper>
  )
}

export default Search
