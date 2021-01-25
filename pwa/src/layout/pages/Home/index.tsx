import React, { useContext, useEffect, useState } from 'react';

import { Header, Friends, Footer } from '../../partials';
import { Greeting } from '../../../modules/components';

import { User } from '../../../modules/types/User';

import { Container } from './styles';
import { FriendsContext } from '../../../state/contexts/FriendsContext';

interface Props {
  handleThemeSwitching(): void
}

const Home: React.FC<Props> = ({ handleThemeSwitching }) => {
  const { getUsersByName, searchedUser } = useContext(FriendsContext);
  const [user, setUser] = useState({} as User)

  useEffect(() => {
    const foundUser: User = getUsersByName('Dotson Jennings')[0];
    setUser(foundUser);
  }, []);

  return (
    <Container>
      <Header text="MySocial" toggleTheme={handleThemeSwitching} />
      <Greeting text={user.greeting} />
      <Friends user={user} searched={searchedUser} />
      <Footer />
    </Container>
  );
}

export default Home;