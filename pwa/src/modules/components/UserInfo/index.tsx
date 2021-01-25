import React from 'react';
import { User } from '../../../modules/types/User';

import { Container } from './styles';

interface Props {
  user: User;
}

const UserInfo: React.FC<Props> = ({ user }) => {
  return (
    <Container>
      <img src={user.picture} />
      <main>
        <h3>{user.name}</h3>
        <div className="info">
          <h5>{user.age} years, {user.company}</h5>
          <span>{user.eyeColor} eyes</span>
        </div>
        <div className="contact">
          <span>Find {user.name} at {user.email} or {user.phone}</span>
        </div>
      </main>
    </Container>
  );
}

export default UserInfo;