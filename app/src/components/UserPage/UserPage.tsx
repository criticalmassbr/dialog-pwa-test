import * as React from 'react'
import styled from 'styled-components'

import Friend from '../Friends'

interface FriendProps {
  name: string,
  email: string,
  _id: string,
  age: number,
  eyeColor: string,
  company: string,
  picture: string,
  friends: [FriendProps]
}

interface Props {
  history: object,
  match: string,
  context: number,
  location:{
    state: {
      friend: FriendProps
    }
  }
  friend: [FriendProps]
}

const Info = styled.div`
  padding: 0.5rem;
`

const Heading = styled.strong`
  font-size: 2rem;
  margin: 0.75em 0 1em;
`

const Wrapper = styled.div`
display: grid
`

const UserWrapper = styled.div`
`

const FriendsWrapper = styled.div``


const UserContainer = ({user}: {user: FriendProps}) => {
  console.log(user);
  
  return (
    <UserWrapper>
      <Info style={{float: 'left'}}>
        <img src={user.picture} alt="Carregando..."/>
      </Info>
      <Info style={{float: 'left'}}>
        <Info>name: {user.name}</Info>
        <Info>age: {user.age}</Info>
        <Info>email: {user.email}</Info>
      </Info>
    </UserWrapper>
  )
}

const UserPage = (props: Props) => {
  const { friend } = props.location.state
    
  return (
    <Wrapper>
      <Heading>MySocial</Heading>
      <UserContainer user={friend}></UserContainer>
      <Heading>Friends: </Heading>
      <FriendsWrapper>
      {friend.friends.map(friend => (
        <Friend friend={friend}></Friend>
      ))}
      </FriendsWrapper>
    </Wrapper>
  )
}

export default UserPage