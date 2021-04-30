import React, { useState } from 'react'
import clientApollo from './lib/apollo'
import { ApolloProvider, gql, useQuery } from '@apollo/client'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import logo from './logo.svg'
import GlobaStyle from './global'
import './App.css'

const Root = () => <ListUsers />
const About = () => <p>About</p>
const Home = () => <p>Home</p>

const GET_USERS = gql`
  query users {
    users {
      _id
      index
      picture
      friends {
        _id
        index
        picture
      }
    }
  }
`

const Loading = () => <p>Looking for users</p>
const HandleErro = () => <p>Something went wrong, sorry!</p>

const ListUsers = () => {
  const { loading, error, data } = useQuery(GET_USERS)

  if (loading) return <Loading />
  if (error) return <HandleErro />

  console.log(data)
  return <div>
    deu certo... eu acho xP
  </div>
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <ApolloProvider client={clientApollo({})}>
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
            Learn React {process.env.REACT_APP_API_URI || 'sem valor'}
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
    </ApolloProvider>
  )
}

export default App
