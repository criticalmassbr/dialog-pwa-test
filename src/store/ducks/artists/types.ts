export enum ArtistsTypes {
  LOAD_REQUEST = '@artists/LOAD_REQUEST',
  LOAD_SUCCESS = '@artists/LOAD_SUCCESS',
  LOAD_FAILURE = '@artists/LOAD_FAILURE',
}

export interface IAlbun {
  id: string;
  name: string;
  image: string;
}

export interface IArtist {
  id: string;
  name: string;
  image: string;
  albuns: IAlbun[];
}

export interface IQueryArtists {
  queryArtists: IArtist[];
}

export interface IData {
  data: IQueryArtists;
}

export interface ArtistsState {
  readonly data: IData | [];
  readonly loading: boolean;
  readonly error: boolean;
}
