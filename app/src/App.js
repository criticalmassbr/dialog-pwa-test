import React, { useState, useCallback } from 'react';
import { ThemeProvider } from 'styled-components';

import ToggleContext from '~/contexts/ToggleContext';

import GlobalStyles from '~/styles/global';
import Home from './pages/Home';

import light from '~/styles/themes/light';
import dark from '~/styles/themes/dark';

function App() {
  const [theme, setTheme] = useState(light);

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light);
  }, [theme]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ToggleContext.Provider value={toggleTheme}>
        <Home />
      </ToggleContext.Provider>
    </ThemeProvider>
  );
}

export default App;
