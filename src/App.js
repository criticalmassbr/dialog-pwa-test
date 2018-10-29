import React, { Component } from 'react';
import {observer} from 'mobx-react';

import Search from './components/search';
import AlbumList from './components/album-list';

import { PageHeader, Container } from './styles';

@observer
class App extends Component {
  componentWillMount() {
    this.props.artistStore.fetchByName('Metallica');
  }

  render() {
    const artist = this.props.artistStore.getArtistByName('Metallica');
    console.log({ artist });

    return this.props.artistStore.isLoading ? 'Loading' : (
      <Container>
        <PageHeader>
          Album Finder
        </PageHeader>
        <Search />
        <AlbumList />
      </Container>
    );
  }
}

export default App;
