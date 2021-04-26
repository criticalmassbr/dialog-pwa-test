import './App.css';
import Home from './pages/Home';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Profile from './pages/Profile';
import { AppProvider } from './hooks';

function App() {

  return (
    <div className="App">
      <AppProvider>
        <Router>
          <div>
            <Route path="/" exact component={Home} />
            <Route path="/me/:id" component={Profile} />
          </div>
        </Router>
      </AppProvider>
    </div>
  );
}

export default App;
