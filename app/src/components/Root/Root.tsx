import * as React from 'react'
import styled from 'styled-components'
import { useQuery } from '@apollo/client'
import { gql } from "@apollo/client"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import userPage from '../UserPage'

import Friends from '../Friends'

interface Friend {
  _id: string,
  name: string,
  email: string,
  picture: string,
  company: string,
  age: number,
  eyeColor: string,
  index: number,
  friends: [Friend]
}


interface QueryData {
  list: Friend[]
}

const Heading = styled.strong`
  display: block;
  font-size: 2rem;
  margin: 0.75em 0 1em;
`

const Wrapper = styled.div`
  margin: 0 auto;
  width: 100rem;
`

const query = gql`
  {
    list {
      _id
      name
      email
      company
      age
      eyeColor
      picture
      index
      friends {
        name
        email
        company
        age
        eyeColor
        picture
        _id
      }
    }
  }
`

interface Props {
  pathname: string,
  state: {
    friend: Friend
  }
}

const List = () => {
  const { data, loading } = useQuery<QueryData>(query)

  const Path = (friend: Friend): Props => ({
    pathname: `/${friend._id}`,
    state: { friend } 
  })

  if(loading) {
    return (
      <Wrapper>
        <Heading>MySocial</Heading>
        <div>Carregando...</div>
      </Wrapper>
    )
  } else {
    return (
      <Wrapper>
        <Heading>MySocial</Heading>
        {data && data.list.map(friend => (
          <Link to={Path(friend)} style={{ textDecoration: 'none', color: 'inherit'}} key={friend._id}>
            <Friends friend={friend}></Friends>
          </Link>
        ))}
      </Wrapper>
    )
  }
}

const Root = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={List}></Route>
          <Route path="/:userId" component={userPage}></Route>
        </Switch>
      </div>
    </Router>
  )
}

export default Root