// MyContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { UserI } from './@types/UserI';

interface MyContextType {
  searchValue: string;
  setSearchValue: (newValue: string) => void;
  users: UserI[]
  setUsers: React.Dispatch<React.SetStateAction<UserI[]>>;
  user: UserI | null
  setUser: React.Dispatch<React.SetStateAction<UserI | null>>
}

const MyContext = createContext<MyContextType | undefined>(undefined);

export const MyContextProvider = ({ children }: {children: ReactNode}) => {
  
  const [searchValue, setSearchValue] = useState<string>('');
  const [users, setUsers]  = useState<UserI[]>([])
  const [user, setUser] = useState<UserI | null>(null)

  return (
    <MyContext.Provider value={{ users, setUsers, searchValue, setSearchValue, user, setUser }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  const context = useContext(MyContext);
  if (context === undefined) {
    throw new Error('useMyContext must be used within a MyContextProvider');
  }
  return context;
};
