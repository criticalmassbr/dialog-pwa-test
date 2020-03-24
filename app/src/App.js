import React, { useEffect, useCallback, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { ApolloProvider } from '@apollo/react-hooks';
import { persistCache } from 'apollo-cache-persist';

import ToggleContext from '~/contexts/ToggleContext';

import GlobalStyles from '~/styles/global';
import Home from './pages/Home';

import light from '~/styles/themes/light';
import dark from '~/styles/themes/dark';

import usePersistedState from '~/utils/usePersistedState';
import apolloClient, { cache } from './services/api';
import OfflineBar from './components/OfflineBar';

function App() {
  const [theme, setTheme] = usePersistedState({
    key: 'theme',
    initialState: light,
  });

  const [loaded, setLoaded] = useState(false);

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light);
  }, [theme, setTheme]);

  useEffect(() => {
    async function loadApolloCache() {
      await persistCache({
        cache,
        storage: window.localStorage,
      });

      setLoaded(true);
    }

    loadApolloCache();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      {!loaded ? (
        <h1>loading</h1>
      ) : (
        <ApolloProvider client={apolloClient}>
          <GlobalStyles />
          <ToggleContext.Provider value={toggleTheme}>
            <Home />
            <OfflineBar />
          </ToggleContext.Provider>
        </ApolloProvider>
      )}
    </ThemeProvider>
  );
}

export default App;
