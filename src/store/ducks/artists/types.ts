export enum ArtistsTypes {
  LOAD_REQUEST = '@artists/LOAD_REQUEST',
  LOAD_SUCCESS = '@artists/LOAD_SUCCESS',
  LOAD_FAILURE = '@artists/LOAD_FAILURE',
}

export interface IAlbuns {
  id: string;
  name: string;
  image: string;
}

export interface IQueryArtists {
  id: string;
  name: string;
  image: string;
  albuns: IAlbuns[];
}

export interface IData {
  data: IQueryArtists[];
}

export interface ArtistsState {
  readonly data: IData | any;
  readonly loading: boolean;
  readonly error: boolean;
}
