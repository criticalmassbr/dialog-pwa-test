import { createContext, useState, ReactNode } from 'react';
import { IPerson } from '../interface/user';

interface UserContextProps {
  user: IPerson | null;
  setUser: React.Dispatch<React.SetStateAction<IPerson | null>>;
  users: IPerson[];
  setUsers: React.Dispatch<React.SetStateAction<IPerson[]>>;
}

interface UserProviderProps {
  children: ReactNode;
}

export const UserContext = createContext<UserContextProps>({
  user: null,
  setUser: () => {
    undefined;
  },
  users: [],
  setUsers: () => {
    undefined;
  },
});

export const UserProvider = ({ children }: UserProviderProps) => {
  const [users, setUsers] = useState<IPerson[]>([]);
  const [user, setUser] = useState<IPerson | null>(null);

  const contextValue: UserContextProps = {
    user,
    setUser,
    users,
    setUsers,
  };

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};
