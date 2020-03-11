import React from 'react'

// Styled
import { ResultsWrapper, Result } from './styled'

const Results = ({ queryArtists, loading, setArtist }) => (
  <ResultsWrapper className={queryArtists || loading ? 'active' : ''}>
    {loading ? (
      <Result disabled type="button">
        Loading...
      </Result>
    ) : (
      queryArtists &&
      queryArtists.slice(0, 4).map(artist => (
        <Result
          key={artist.id}
          type="button"
          onClick={() =>
            setArtist({ name: artist.name, albums: artist.albums })
          }
        >
          {artist.name.toLowerCase()}
        </Result>
      ))
    )}
  </ResultsWrapper>
)

export default Results
