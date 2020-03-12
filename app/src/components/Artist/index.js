import React from 'react'

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

export default Artist
