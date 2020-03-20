import React, { useCallback } from 'react';
import { ThemeProvider } from 'styled-components';
import { ApolloProvider } from '@apollo/react-hooks';

import ToggleContext from '~/contexts/ToggleContext';

import GlobalStyles from '~/styles/global';
import Home from './pages/Home';

import light from '~/styles/themes/light';
import dark from '~/styles/themes/dark';

import usePersistedState from '~/utils/usePersistedState';
import apolloClient from './services/api';

function App() {
  const [theme, setTheme] = usePersistedState({
    key: 'theme',
    initialState: light,
  });

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light);
  }, [theme, setTheme]);

  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={apolloClient}>
        <GlobalStyles />
        <ToggleContext.Provider value={toggleTheme}>
          <Home />
        </ToggleContext.Provider>
      </ApolloProvider>
    </ThemeProvider>
  );
}

export default App;
