import React from 'react';
import ReactDOM from 'react-dom';
import Spotifynder from './components/Spotifynder/index.jsx';
import * as serviceWorker from './serviceWorker';
import './assets/css/index.css';

ReactDOM.render(<Spotifynder />, document.getElementById('root'));
serviceWorker.register();