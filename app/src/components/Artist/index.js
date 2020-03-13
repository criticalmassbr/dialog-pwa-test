import React from 'react'
import PropTypes from 'prop-types'

// Styled
import { ArtistWrapper, AvatarWrapper, ArtistText } from './styled'

const Artist = ({ artist: { name, image, albums } }) =>
  name && (
    <ArtistWrapper>
      <AvatarWrapper
        style={{
          backgroundImage: `url(${image})`
        }}
      ></AvatarWrapper>

      <ArtistText>
        <div className="title">{name}</div>
        <div className="artist">Artist</div>
      </ArtistText>
    </ArtistWrapper>
  )

Artist.propTypes = {
  artist: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    albums: PropTypes.array
  })
}

export default Artist
