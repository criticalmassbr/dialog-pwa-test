import { observable, action, autorun } from 'mobx';

class Query {

  @observable filter = '';
  @observable data;

  @action
  fetchAlbums = () => {
    fetch('https://spotify-graphql-server.herokuapp.com/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: 
          `{
            queryArtists(byName: "${this.filter}") {
            name
            id
            image
            albums {
              name
              id
              image
            }
          }
        }` 
      }),
    })
    .then(res => res.json())
    .then(res => {
      localStorage.setItem(this.filter, JSON.stringify(res.data.queryArtists));
      this.data = observable.array(res.data.queryArtists)
      // console.log(res.data.queryArtists)
    });
  }

  @action
  editFilter = (item) => {
    this.filter = item;
    if (navigator.onLine) {
      this.fetchAlbums();
    }else{
      this.data = JSON.parse(localStorage.getItem(item));
    }
  }

}

export default new Query();