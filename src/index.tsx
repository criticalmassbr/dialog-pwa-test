import React from 'react';
import ReactDOM from 'react-dom';
import './style/default.css'
import * as serviceWorker from './serviceWorker';

const rootEl = document.getElementById('app-site');

let render = () => {
    const App = require('./App').default;
    ReactDOM.render(
        <App />,
        rootEl
    );
};

render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
