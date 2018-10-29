import React, { Component } from 'react';
import { observer } from 'mobx-react';
import qs from 'query-string';

import Loading from '~/src/components/loading';
import Search from '~/src/components/search';
import Artist from '~/src/components/artist';

import { PageHeader, Container } from './styles';

@observer
class Home extends Component {
  handleSearchSubmit = (e) => {
    this.props.history.push(`?q=${e.target.value}`);
  }

  componentDidMount() {
    const { q } = qs.parse(this.props.location.search);

    if (q) {
      this.props.store.fetchByName(q);
    }
  }

  componentWillReceiveProps(nextProps) {
    const { location, store } = this.props;
    if (location.search !== nextProps.location.search) {
      const { q } = qs.parse(nextProps.location.search);
      store.fetchByName(q);
    }
  }

  render() {
    const { location, store } = this.props;
    const { q } = qs.parse(location.search);

    return (
      <Container>
        <PageHeader>Album finder</PageHeader>
        <Search defaultValue={q} onSubmit={this.handleSearchSubmit} />
        {store.isLoading ? <Loading /> : <Artist artist={store.getArtistByName(q)} />}
      </Container>
    );
  }
}

export default Home;
