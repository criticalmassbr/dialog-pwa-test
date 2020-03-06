import React from 'react';

import {
  Container,
  AlbumCover,
  PlayIcon,
  AlbumName,
  AlbumDescription,
} from './styles';

function Album ({ album }) {
  return (
    <Container>
      <AlbumCover src={ album.image } />
      <AlbumDescription data-album-desc>
        <PlayIcon className="fa fa-play-circle" />
        <AlbumName>
          { album.name }
        </AlbumName>
      </AlbumDescription>
    </Container>
  )
}

export default Album;