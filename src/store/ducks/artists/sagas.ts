import { call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import { loadSuccess, loadFailure } from './actions';
import { IData, IArtist } from './types';

export function* artists({ payload: { search } }: any) {
  try {
    const { data }: { data: IData } = yield call(
      api.get,
      `graphql?query=%7B%0A%20%20queryArtists(byName%3A%20"${search}")%20%7B%0A%20%20%20%20name%0A%20%20%20%20id%0A%20%20%20%20image%0A%20%20%20%20albums%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20image%20%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A`,
    );

    const artist: IArtist = data.data?.queryArtists[0];

    if (!artist) {
      toast.error('Nenhum artista encontrado');

      yield put(loadFailure());

      return;
    }

    yield put(loadSuccess(artist));
  } catch (err) {
    toast.error('Falha ao obter os dados');
    yield put(loadFailure());
  }
}
