import { action } from 'typesafe-actions';
import { ArtistsTypes, IArtist } from './types';

// primeiro parametro é o type do action e o segundo um pay load se tiver
export const loadRequest = (search: string) =>
  action(ArtistsTypes.LOAD_REQUEST, { search });
export const loadSuccess = (data: IArtist) =>
  action(ArtistsTypes.LOAD_SUCCESS, { data });
export const loadFailure = () => action(ArtistsTypes.LOAD_FAILURE);
