
import { gql } from '@apollo/client';

const FIND_QUERY = gql`
fragment personFrag on Person {
  id
  index
  picture
  age
  eyeColor
  name
  company
  email
  phone
  greeting
}
  query FIND_QUERY($name:String){
    list(name:$name) {
      ...personFrag
      friends {
        ...personFrag
      }
    }
  }
`
export interface Person {
  id: string
  index?: number
  picture?: string
  age?: string
  eyeColor?: string
  name?: string
  company?: string
  email?: string
  phone?: string
  friends?: [Person]
  greeting?: string
}

export {
  FIND_QUERY
}