import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import logo from './logo.svg';
import GlobaStyle from './global';
import './App.css';

const Root = () => <p>Welcome</p>
const About = () => <p>About</p>
const Home = () => <p>Home</p>

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <GlobaStyle />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>Contador: {count}</p>
        <button onClick={() => setCount(count + 1)}>+</button>
        <Router>
          <nav>
            <ul>
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </nav>
          <Switch>
            <Route path="/" exact>
              <Root />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
