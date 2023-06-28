import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';
import { GlobalStyle } from './globalStyles/styled.ts';
import { UserProvider } from './contexts/userContext.tsx';
import { SearchProvider } from './contexts/searchContext.tsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { registerSW } from 'virtual:pwa-register';

// add this to prompt for a refresh
const updateSW = registerSW({
  onNeedRefresh() {
    if (confirm('New content available. Reload?')) {
      updateSW(true);
    }
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle>
      <UserProvider>
        <SearchProvider>
          <App />
          <ToastContainer
            position='top-right'
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme='colored'
          />
        </SearchProvider>
      </UserProvider>
    </GlobalStyle>
  </React.StrictMode>,
);
