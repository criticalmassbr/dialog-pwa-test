declare type ID = string

export interface People {
  _id: ID
  index?: number
  picture?: string
  age?: number
  eyeColor?: string
  name?: string
  company?: string
  email?: string
  phone?: string
}

export interface User extends People {
  friends: People[]
  greeting: string
}
