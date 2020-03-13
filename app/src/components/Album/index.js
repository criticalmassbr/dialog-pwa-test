import React from 'react'
import PropTypes from 'prop-types'

// Styled
import { AlbumWrapper } from './styled'

const Album = ({ album: { id, image, name } }) => (
  <AlbumWrapper
    href={`https://open.spotify.com/album/${id}`}
    title={name}
    target="_blank"
  >
    <img src={image} alt={name} />

    <div className="album-title">{name}</div>
  </AlbumWrapper>
)

Album.propTypes = {
  album: PropTypes.shape({
    id: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string
  })
}

export default Album
