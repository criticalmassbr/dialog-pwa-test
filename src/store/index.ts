import { createStore, applyMiddleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { ArtistsState } from './ducks/artists/types';

import rootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';

export interface ApplicationState {
  artists: ArtistsState;
}

interface ReduxPersist {
  key: string;
  whitelist: any;
  storage: any;
}

const persistConfig: ReduxPersist = {
  key: 'root',
  whitelist: ['artists'],
  storage,
};

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(
  persistReducer(persistConfig, rootReducer),
  applyMiddleware(sagaMiddleware),
);

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export default { store, persistor };
