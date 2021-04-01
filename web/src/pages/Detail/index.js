import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import DETAIL_USERS from "../../querys/detailUser";

import {
  UserList,
  DetailUser,
  InfoUser,
  UserDetail,
  Label
} from './styles';
import Card from '../../components/Card';
import Header from '../../components/Header'


export default function Detail( props, { query} ) {
  const [friends, setFriends] = useState([]);
  const [user, setUser] = useState({  });

  const id = props.match.params.id;

  const { loading, error, data } = useQuery(DETAIL_USERS, {
    variables: { id }
  });

  useEffect(() => {

    if(!data || !data.userDetail) {
      setFriends([])
    }
    else {
      setFriends(data.userDetail.friends);
      setUser(data.userDetail)
    }
  }, [data]);

  return (
    <div>
      <Header setUserSearch={query}/>

      <UserDetail>
        <img
          src={user.picture}
          alt="userProfileImage"
        />
        <DetailUser>
          <InfoUser>
            <strong>Name: </strong>
            <label >{user.name}</label>
          </InfoUser>
          <InfoUser>
            <strong>Age: </strong>
            <label >{user.age}</label>
          </InfoUser>
          <InfoUser>
            <strong>Email: </strong>
            <label >{user.email}</label>
          </InfoUser>
        </DetailUser>
      </UserDetail>

      <Label >Friends</Label>

      <UserList>
        {friends.map(user =>
          <Card
            key={String(user._id)}
            data={user}
          />)}
      </UserList>
    </div>
  );
}
