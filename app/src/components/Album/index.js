import React from 'react'

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

export default Album
