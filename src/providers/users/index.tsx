import { createContext, useState, useEffect, ReactNode } from "react";
import axios from "axios";

interface UserProviderData {
  users: User[];
}
interface UsersProviderProps {
  children: ReactNode;
}
interface User {
  age: number;
  company: string;
  email: string;
  eyeColor: string;
  id: number;
  name: string;
  profilePic: string;
}

export const UsersContext = createContext({} as UserProviderData);

export const UsersProvider = ({ children }: UsersProviderProps) => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios
      .get("/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <UsersContext.Provider value={{ users }}>{children}</UsersContext.Provider>
  );
};
