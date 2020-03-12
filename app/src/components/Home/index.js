import React, { useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { useDebounce } from 'use-lodash-debounce'
import { Offline } from 'react-detect-offline'

// Components
import Header from '../Header'
import Search from '../Search'
import Artist from '../Artist'
import Albums from '../Albums'

// Styled
import { Notification } from './styled'

// Query
import { GET_ALBUMS } from './query'

function Home() {
  const [search, setSearchValue] = useState('')
  const debouncedSearch = useDebounce(search, 600)
  const { loading, data } = useQuery(GET_ALBUMS, {
    variables: { name: debouncedSearch },
    skip: !debouncedSearch || search.length < 3
  })

  const [artist, setArtist] = useState({ name: null, image: null, albums: [] })

  return (
    <>
      <Header />

      <main>
        <Search
          search={search}
          setSearchValue={setSearchValue}
          data={data}
          loading={loading}
          setArtist={setArtist}
        />
        <Artist artist={artist} />

        <Albums albums={artist.albums} />
      </main>

      <Offline>
        <Notification>You are now on offline mode!</Notification>
      </Offline>
    </>
  )
}

export default Home
