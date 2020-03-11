import React from 'react'

// Component
import Album from '../Album'

// Styled
import { AlbumsWrapper, AlbumList } from './styled'

const Albums = () => (
  <AlbumsWrapper>
    <h2>albums</h2>

    <AlbumList>
      <li>
        <Album />
      </li>
      <li>
        <Album />
      </li>
      <li>
        <Album />
      </li>
    </AlbumList>
  </AlbumsWrapper>
)

export default Albums
