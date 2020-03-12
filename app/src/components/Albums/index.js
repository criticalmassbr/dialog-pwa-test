import React from 'react'

// Component
import Album from '../Album'

// Styled
import { AlbumsWrapper, AlbumList, P } from './styled'

const Albums = ({ albums }) => (
  <AlbumsWrapper>
    {albums.length ? (
      <>
        <h2>albums</h2>
        <AlbumList>
          {albums.map((album, i) => (
            <li key={i}>
              <Album album={album} />
            </li>
          ))}
        </AlbumList>
      </>
    ) : (
      <P>search for an artist to see their information and albums!</P>
    )}
  </AlbumsWrapper>
)

export default Albums
