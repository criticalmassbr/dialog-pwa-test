export enum ArtistsTypes {
  LOAD_REQUEST = '@artists/LOAD_REQUEST',
  LOAD_SUCCESS = '@artists/LOAD_SUCCESS',
  LOAD_FAILURE = '@artists/LOAD_FAILURE',
}

export interface IAlbum {
  id: string;
  name: string;
  image: string;
}

export interface IArtist {
  id: string;
  name: string;
  image: string;
  albums: IAlbum[];
}

interface IQueryArtists {
  queryArtists: IArtist[];
}

export interface IData {
  data: IQueryArtists;
}

export interface ArtistsState {
  readonly data: IArtist | null;
  readonly loading: boolean;
  readonly error: boolean;
}
