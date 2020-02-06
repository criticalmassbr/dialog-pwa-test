import { call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import { loadSuccess, loadFailure } from './actions';

export function* artists({ payload: search }: any) {
  try {
    const { data } = yield call(
      api.get,
      `graphql?query=%7B%0A%20%20queryArtists(byName%3A%20%${search}%22)%20%7B%0A%20%20%20%20name%0A%20%20%20%20id%0A%20%20%20%20image%0A%20%20%20%20albums%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20image%20%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A`,
    );

    yield put(loadSuccess(data));
  } catch (err) {
    toast.error('Falha ao obter os dados');
    yield put(loadFailure());
  }
}
