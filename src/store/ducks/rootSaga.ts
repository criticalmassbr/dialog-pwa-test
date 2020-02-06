import { all, takeLatest } from 'redux-saga/effects';

import { ArtistsTypes } from './artists/types';
import { artists } from './artists/sagas';

export default function* rootSaga() {
  return yield all([takeLatest(ArtistsTypes.LOAD_REQUEST, artists)]);
}
