import { createContext, useState, useEffect, ReactNode } from "react";
import axios from "axios";

interface User {
  age: number;
  company: string;
  email: string;
  eyeColor: string;
  id: number;
  name: string;
  profilePic: string;
}

interface UserProviderData {
  friends: User[];
  user?: User;
}
interface UsersProviderProps {
  children: ReactNode;
}

export const UsersContext = createContext({} as UserProviderData);

export const UsersProvider = ({ children }: UsersProviderProps) => {
  const [friends, setFriends] = useState<User[]>([]);
  const [user, setUser] = useState<User>();
  useEffect(() => {
    axios
      .get("/users")
      .then((response) => {
        const data = response.data;
        const splicedUser = data.splice(0, 1);
        setUser(splicedUser[0]);
        setFriends(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <UsersContext.Provider value={{ friends, user }}>
      {children}
    </UsersContext.Provider>
  );
};
