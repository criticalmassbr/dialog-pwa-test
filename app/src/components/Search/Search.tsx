import * as React from 'react'
import styled from 'styled-components'
import { useLazyQuery, gql } from '@apollo/client'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Heading = styled.strong`
  font-size: 2rem;
  margin: 0.75em 0 1em;
`

const Wrapper = styled.div`
  margin-bottom: 0.5rem;
  align-content: center;
  justify-content: center;
`

const Input = styled.input`
  margin-left: 1rem;
  type: text;
  id: "search";
  placeholder: "search";
  size: 10rem;
  value: "";
  height: 2rem;
  border-radius: 16px;
`

const Button = styled.input`
  value: "Buscar";
`
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

const query = gql`
  query ($name: String){
    list (name: $name) {
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

const Search = () => {
  const [runQuery, { data, loading }] = useLazyQuery<QueryData>(query) 
  if(loading) {
    return <div>Carregando...</div>
  } 
  if(data && data.list[0]) {
    const friend = data?.list[0]
    return (
      <Redirect to={{ pathname: `/${friend._id}`, state: { friend }}}></Redirect>
    )
  }
  if(data && data.list.length == 0) {
    const friend = data?.list[0]
    return (
      <Redirect to="/"></Redirect>
    )
  }
  
  const onSearch = (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    event.preventDefault()
    const input = document.getElementById("search") as HTMLInputElement
    const name = input.value
    runQuery({ variables: { name }})
  }
  
  return (
    <Wrapper>
      <Link to="/">
        <Heading>MySocial</Heading>
      </Link>
        <Input id="search" />
        <Button type="submit" onClick={onSearch} />
    </Wrapper>
  )
}

export default Search