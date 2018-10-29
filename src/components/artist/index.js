import React from 'react';

import AlbumList from '~/src/components/album-list';

import {
  Preview,
  Wrapper,
  Avatar,
  Name,
} from './styles';

const Artist = ({ artist }) => artist ? (
  <Wrapper>
    <Preview>
      <Avatar src={artist.image} alt="artist-avatar" />
      <Name>{artist.name}</Name>
    </Preview>
    <AlbumList albums={artist.albums} />
  </Wrapper>
) : null;

export default Artist;
