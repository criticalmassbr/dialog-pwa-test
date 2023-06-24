import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';
import { GlobalStyle } from './globalStyles/styled.ts';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle>
      <App />
    </GlobalStyle>
  </React.StrictMode>,
);
