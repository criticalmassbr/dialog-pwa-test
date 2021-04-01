import React, { useState, useEffect } from 'react';

import { useQuery } from '@apollo/client';
import SEARCH_USERS from "../../querys/searchUsers";

import { UserList } from './styles';

import Card from '../../components/Card';
import Header from '../../components/Header'

export default function Home() {
  const [users, setUsers] = useState([]);
  const [userSearch, setUserSearch] = useState('');

  let { loading, data, error } = useQuery(SEARCH_USERS, {
    variables: {
      name: userSearch
    }
  });

  useEffect(() => {
    if (data)
      setUsers(data.SearchUsers)
  }, [data]);

  return (
    <div>
      <Header setUserSearch={setUserSearch}/>
      <UserList>
        {users.map(user =>
          <Card
            setUserSearch={setUserSearch}
            key={String(user._id)}
            data={user}
          />)}
      </UserList>
    </div>
  );
}
