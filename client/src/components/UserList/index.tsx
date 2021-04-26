import React from 'react';
import IUser from '../../model/UserProps';
import User from '../User';
import { Container } from './styles';

interface ListProps {
  linkUser: boolean;
  users: IUser[] | undefined;
}

export default function UserList({ linkUser, users }: ListProps) {
    return (
        <Container>
          { users && users.map(user => <User linkUser={linkUser} key={user.index} user={user} /> ) }
        </Container>
    )
}