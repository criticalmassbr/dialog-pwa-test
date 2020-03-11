import React, { useState } from 'react'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import { useDebounce } from 'use-lodash-debounce'

// Components
import Input from '../Input'
import Results from '../Results'

// Styled
import { SearchWrapper } from './styled'

const GET_ALBUMS = gql`
  query SearchArtist($name: String!) {
    queryArtists(byName: $name) {
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

function Search() {
  const [search, setSearchValue] = useState('')
  const [artist, setArtist] = useState({})
  const debouncedSearch = useDebounce(search, 600)
  const { loading, error, data } = useQuery(GET_ALBUMS, {
    variables: { name: debouncedSearch },
    skip: !debouncedSearch || search.length < 3
  })

  // if (loading) return 'Loading...'
  // if (error) return `Error! ${error.message}`

  return (
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
      />
    </SearchWrapper>
  )
}

export default Search
