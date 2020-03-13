import React from 'react'
import PropTypes from 'prop-types'

// Styled
import { ResultsWrapper, ResultWrapper } from './styled'

function Results({ queryArtists, loading, setArtist, setSearchValue }) {
  const handleClick = artist => {
    setArtist({ name: artist.name, image: artist.image, albums: artist.albums })
    setSearchValue('')
  }

  return (
    <ResultsWrapper className={queryArtists || loading ? 'active' : ''}>
      {loading ? (
        <ResultWrapper disabled type="button" className="loading">
          Loading...
        </ResultWrapper>
      ) : (
        queryArtists &&
        queryArtists.slice(0, 4).map(artist => (
          <ResultWrapper
            key={artist.id}
            type="button"
            onClick={() => handleClick(artist)}
          >
            {artist.name.toLowerCase()}
          </ResultWrapper>
        ))
      )}
    </ResultsWrapper>
  )
}

Results.propTypes = {
  queryArtists: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  setArtist: PropTypes.func.isRequired,
  setSearchValue: PropTypes.func.isRequired
}

export default Results
