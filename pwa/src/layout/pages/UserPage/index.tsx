import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Header, Friends, Footer } from '../../partials';
import { UserInfo } from '../../../modules/components';
import { User } from '../../../modules/types/User';
import { FriendsContext } from '../../../state/contexts/FriendsContext';
import { Container } from './styles';

interface Props {
  handleThemeSwitching(): void,
}

interface Location {
  state: {
    user_id: string;
  }
}

const UserPage: React.FC<Props> = ({ handleThemeSwitching }) => {
  const { getUserById, searchedUser } = useContext(FriendsContext);
  const [user, setUser] = useState({} as User)
  const location = useLocation() as Location;

  useEffect(() => {
    const userID = location.state.user_id;
    const foundUser: User = getUserById(userID);

    setUser(foundUser);
  }, [location]);

  return (
    <Container>
      <Header text="MySocial" toggleTheme={handleThemeSwitching} />
      <UserInfo user={user} />
      <Friends user={user} searched={searchedUser} friendsText="Their friends" />
      <Footer />
    </Container>
  );
}

export default UserPage;