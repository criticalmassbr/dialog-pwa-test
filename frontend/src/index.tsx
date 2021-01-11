import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Loader from "./components/Loader"

serviceWorker.register();

ReactDOM.render(
  <React.StrictMode>
    <Loader />
  </React.StrictMode>,
  document.getElementById('root')
);


