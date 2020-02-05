import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';

import store from './store';
import Routes from './routes';

import GlobalStyles from './styles/GlobalStyles';

const App: React.FC = () => {
  return (
    <Provider store={store.store}>
      <GlobalStyles />
      <ToastContainer autoClose={3000} />
      <PersistGate loading={null} persistor={store.persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  );
};

export default App;
