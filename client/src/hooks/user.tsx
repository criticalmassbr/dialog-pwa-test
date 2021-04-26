import React, { createContext, useCallback, useState, useContext } from 'react';
import IUser from '../model/UserProps';

interface UserContextData {
  users: IUser[] | null;
  user: IUser | null;
  list(name?: string): Promise<void>;
  profile(id: string): Promise<void>;
}

const UserContext = createContext<UserContextData>({} as UserContextData);

export const UserProvider: React.FC = ({ children }) => {
  const [data, setData] = useState(null);
  const [user, setUser] = useState(null);
  const list = useCallback(async ( name = "" ): Promise<void> => {
  const params = JSON.stringify({query: `{ list(name: "${name}") { _id, index, name, picture, age, eyeColor, company, email } }`});

    const fetchData = async () => {
        const response = 
            await fetch("http://localhost:4000/graphql", {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                },
                body: params
            });
        const newData = await response.json();
        setData(() => {
          return newData.data.list;
        } );
    };
    await fetchData();
}, []);

const profile = useCallback(async ( id ): Promise<void> => {
    const params = JSON.stringify({query: `{ profile(_id: "${id}") { _id, index, name, picture, age, eyeColor, company, email friends {_id, index, name, picture, age, eyeColor, company, email} } }`});
  
      const fetchData = async () => {
          const response = 
              await fetch("http://localhost:4000/graphql", {
                  method: 'POST',
                  headers: {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json',
                  },
                  body: params
              });
          const newData = await response.json();
          setUser(() => {
            return newData.data.profile;
          } );          
      };
      await fetchData();
  }, []);
  
  return (
    <UserContext.Provider value={{ user: user, users: data, list, profile }}>
      {children}
    </UserContext.Provider>
  );
};

export function useData(): UserContextData {
    const context = useContext(UserContext);
    if (!context) {
      throw new Error('useData must be used within an UserProvider');
    }
  
    return context;
  }  