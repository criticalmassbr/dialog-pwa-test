import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { ThemeProvider, DefaultTheme } from 'styled-components';
import { light, dark } from './themes';
import GlobalTheme from './base/global';
import { usePersistedState } from './state/hooks/usePersistedState';

import FriendsProvider from './state/contexts/FriendsContext';
import Home from './layout/pages/Home';
import UserPage from './layout/pages/UserPage';

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const handleThemeSwitching = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <FriendsProvider>
        <GlobalTheme />
        <Router>
          <Switch>
            <Route exact path="/">
              <Home handleThemeSwitching={handleThemeSwitching} />
            </Route>
            <Route path="/user/:name">
              <UserPage handleThemeSwitching={handleThemeSwitching} />
            </Route>
          </Switch>
        </Router>

      </FriendsProvider>
    </ThemeProvider>
  );
}

export default App;
