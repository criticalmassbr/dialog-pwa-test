import { observable, flow } from 'mobx';
import ArtistsApi from '~/src/apis/artist';

class ArtistStore {
  @observable artists = {};
  @observable idsByName = {};
  @observable isLoading = false;

  getArtistByName = (query) =>
    this.artists[this.idsByName[query]];

  fetchByName = flow(function* (query) {
    this.isLoading = true;

    if (this.idsByName[query]) {
      this.isLoading = false;
      return;
    }

    try {
      const [id] = (yield ArtistsApi.fetchArtistIdsByName(query)).map(a => a.id);
      if (id && !this.artists[id]) {
        const artists = yield ArtistsApi.fetchArtistByName(query);
        artists.forEach(artist => {
          this.artists[artist.id] = artist;
        });
      }
      this.idsByName[query] = id;
    } finally {
      this.isLoading = false;
    }
  })
}

export default new ArtistStore();
