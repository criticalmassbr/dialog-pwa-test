import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyles from './GlobalStyles';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import swDev from './swDev'
import Home from './pages/Home';
import { MyContextProvider } from './MyContext';
import Profile from './pages/Profile';
import swDev from './swDev';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:id",
    element: <Profile />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MyContextProvider>
      <GlobalStyles />
      <RouterProvider router={router} />
    </MyContextProvider>
  </React.StrictMode>
);

swDev()