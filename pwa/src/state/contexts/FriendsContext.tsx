import React, { createContext, useMemo, useState } from 'react';

import users from '../../mock';
import { User } from '../../modules/types/User';
import { ALL_USERS, USERS_BY_NAME } from '../../infra/Queries';
import { useQuery } from '@apollo/client';

interface Props {
  children: any;
}

interface IContextProps {
  usersToDisplay: any[];
  getAllUsers(): User[];
  getFriends(userName: string): User[] | [];
  getUsersByName(name: string): User[] | [];
  searchedUser: string;
  setSearched: (name: string) => void;
  getFriendsByName: (userName: string, searched: string) => User[] | [];
  getUserById: (id: string) => User;
}

export const FriendsContext = createContext({} as IContextProps);

const FriendsProvider: React.FC<Props> = ({ children }) => {
  const allUsersQuery = useQuery(ALL_USERS);

  const allUsers = allUsersQuery.data;

  const [usersToDisplay, setUsersToDisplay] = useState(users);
  const [searchedUser, setSearchedUser] = useState('');

  const fetchUsers = useMemo(() => {
    return allUsers ? allUsers.list as User[] : users as User[]
  }, [allUsers]);

  const getAllUsers = (): User[] => {
    setUsersToDisplay(fetchUsers);
    return fetchUsers as User[];
  }

  const getFriends = (userName: string): User[] | [] => {
    const foundUser = fetchUsers.find(thisUser => thisUser.name === userName);
    if (foundUser) {
      setUsersToDisplay(foundUser.friends as User[]);
      return foundUser.friends as User[];
    } else {
      setUsersToDisplay(users);
      return fetchUsers as User[];
    }
  }

  const getUsersByName = (userName: string): User[] | any[] => {
    const nameLength = userName.length;
    const considerableSubstringLength = Math.ceil(nameLength * 0.6);
    const considerableSubstring = userName.slice(0, considerableSubstringLength);

    let found = fetchUsers.filter((user) => new RegExp(`${considerableSubstring}`, 'gi').test(user.name)) as User[];

    if (!found.length) {
      for (const user of fetchUsers) {
        const friends = user.friends.filter(item => item.name.match(userName));
        if (friends.length !== 0) {
          found = friends as User[];
          break;
        }
      }
    }

    const friends = found.length ? found as User[] : [];
    setUsersToDisplay(friends);

    return friends;
  }

  const getFriendsByName = (userName: string, searched: string): User[] | [] => {
    const user = fetchUsers.find(thisUser => thisUser.name === userName) as User;

    const nameLength = searched.length;
    const considerableSubstringLength = Math.ceil(nameLength * 0.6);
    const considerableSubstring = searched.slice(0, considerableSubstringLength);

    const foundUsers = user.friends.filter((user) => new RegExp(`${considerableSubstring}`, 'gi').test(user.name)) as User[];

    const friends = foundUsers.length ? foundUsers as User[] : [];

    return friends;
  }

  const getUserById = (id: string): User => {
    let found = fetchUsers.find(thisUser => thisUser._id === id) as User;

    if (!found) {
      for (const user of fetchUsers) {
        const friend = user.friends.find(item => item._id === id);
        if (friend) {
          found = friend as User;
          break;
        }
      }
    }

    return found as User;
  }

  const setSearched = (name: string) => {
    setSearchedUser(name);
  }

  return (
    <FriendsContext.Provider value={{
      usersToDisplay,
      getAllUsers,
      getFriends,
      getUsersByName,
      searchedUser,
      setSearched,
      getFriendsByName,
      getUserById
    }}>
      {children}
    </FriendsContext.Provider>
  )
}

export default FriendsProvider;