import React from 'react';
import ReactDOM from 'react-dom';
import LoaderContainer from "./components/Loader/LoaderContainer"
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <LoaderContainer/>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();
