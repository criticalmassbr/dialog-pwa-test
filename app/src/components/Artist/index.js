import React from 'react'

// Styled
import { ArtistWrapper, AvatarWrapper, ArtistText } from './styled'

const Artist = () => (
  <ArtistWrapper>
    <AvatarWrapper
      style={{
        backgroundImage:
          'url(https://rollingstone.uol.com.br/media/_versions/legacy/2017/img-1041801-mac-demarco_widelg.jpg'
      }}
    ></AvatarWrapper>

    <ArtistText>
      <div className="title">Mac DeMarco</div>
      <div className="artist">Artist</div>
    </ArtistText>
  </ArtistWrapper>
)

export default Artist
