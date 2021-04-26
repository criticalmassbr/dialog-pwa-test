import React from 'react';
import { Link } from 'react-router-dom';
import IUser from '../../model/UserProps';
import { Container, ProfilePicture, ProfileData } from './styles';

interface UserProps {
  linkUser: boolean;
  key: string;
  user: IUser;
}

export default function User({ linkUser, user }: UserProps) {
    return (
        <Link to={linkUser ? `/me/${user._id}` : "#"} style={{ textDecoration: 'none', color: 'inherit' }}>
          <Container>
              <ProfilePicture src={user.picture} alt={user.name} />
              <ProfileData>
                <p>Name: {user.name}</p>
                <p>Age: {user.age}</p>
                <p>EyeColor: {user.eyeColor}</p>
                <p>Company: {user.company}</p>
                <p>Email: {user.email}</p>
              </ProfileData>
          </Container>
        </Link>
    )
}