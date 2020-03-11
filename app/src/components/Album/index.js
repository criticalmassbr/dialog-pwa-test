import React from 'react'

// Styled
import { AlbumWrapper } from './styled'

const Album = () => (
  <AlbumWrapper href="#" title="This Old Dog">
    <img
      src="https://monkeybuzz.com.br/wp-content/uploads/2017/05/mac-demarco-this-old-dog-591460d4bf88d.jpg"
      alt="This Old Dog"
    />

    <div className="album-title">This Old Dog</div>
    <div className="album-year">2017</div>
  </AlbumWrapper>
)

export default Album
