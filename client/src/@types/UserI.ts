export interface UserI {
  _id : string
  picture : string
  age : number
  eyeColor : string
  company : string
  email : string
  phone : string
  name : string
  greeting: string
  friends: UserI[];
}