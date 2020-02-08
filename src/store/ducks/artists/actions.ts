import { action } from 'typesafe-actions';
import { ArtistsTypes, IArtist } from './types';

export const loadRequest = (search: string) =>
  action(ArtistsTypes.LOAD_REQUEST, { search });
export const loadSuccess = (data: IArtist) =>
  action(ArtistsTypes.LOAD_SUCCESS, { data });
export const loadFailure = () => action(ArtistsTypes.LOAD_FAILURE);
