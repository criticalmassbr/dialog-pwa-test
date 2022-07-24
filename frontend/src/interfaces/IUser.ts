import IUserFriends from './IUserFriends';

interface IUser {
  _id: string;
  picture: string;
  age: number;
  eyeColor: string;
  name: string;
  company: string;
  email: string;
  friends: IUserFriends[];
}

export default IUser;