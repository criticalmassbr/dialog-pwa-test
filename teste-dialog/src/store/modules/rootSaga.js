import { all } from "redux-saga/effects";

import artist from "./artist/sagas";

export default function* rootSaga() {
  return yield all([artist]);
}
