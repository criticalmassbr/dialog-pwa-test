import React from 'react'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'

const GET_ALBUMS = gql`
  {
    queryArtists(byName: "Metallica") {
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

function Home() {
  const { loading, error, data } = useQuery(GET_ALBUMS)

  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  return (
    <div className="App">
      <h1>hello world</h1>
    </div>
  )
}

export default Home
