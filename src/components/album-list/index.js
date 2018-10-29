import React, { Component } from 'react';
import Loading from '../loading';
import {
  AlbumListWrapper,
  Album,
  AlbumCover,
  AlbumTitle,
} from './styles';

import { data } from '../../data';

class AlbumList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
    }
  }

  componentDidMount() {
    setTimeout(() => this.setState({ isLoading: false }), 2000);
  }

  render() {
    const { isLoading } = this.state;
    return (
      <AlbumListWrapper>
        {isLoading && <Loading />}
        {!isLoading && data.queryArtists[0].albums.map(album => (
          <Album key={album.id}>
            <AlbumCover src={album.image} />
            <AlbumTitle>{album.name}</AlbumTitle>
          </Album>
        ))}
      </AlbumListWrapper>
    );
  }
}

export default AlbumList;
