import * as React from 'react'
import styled from 'styled-components'

interface FriendProps {
  friend: {
    _id: string,
    name: string,
    email: string,
    picture: string,
    company: string,
    age: number,
    eyeColor: string
  }
}

const Friend = styled.div`
  padding: 1rem;
  width: 230px;
  height: 300px;
  border-style: solid;
  border-radius: 16px;
  border-width: 0.5px;
  flex: 1;
`

// const Wrapper = styled.div`
//   display: grid;
//   padding: 0.5rem;
//   grid-auto-flow: dense;
//   grid-auto-rows: minmax(1fr, auto);
//   grid-grap: 10px
//   grid-template-columns: repeat(3, 1fr) ;
  
// `

const Wrapper = styled.div`
  display: inline-grid;
  padding: 0.5rem;
  margin: 0 auto;
`

const Friends = ({friend}: FriendProps) => {
  return (
  <Wrapper>
    <Friend key={friend._id}>
      <img src={friend.picture} alt="Carregando..."/>
      <div>name: {friend.name}</div>
      <div>age: {friend.age}</div>
      <div>eyeColor: {friend.eyeColor}</div>
      <div>company: {friend.company}</div>
      <div>email: {friend.email}</div>
    </Friend>
  </Wrapper>
  )
}

export default Friends