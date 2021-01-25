import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { Card } from '../../../modules/components';
import AllUsersButton from '../../../modules/components/AllUsersButton';
import { Container } from './styles';

import users from '../../../mock';
import { User } from '../../../modules/types/User';
import { FriendsContext } from '../../../state/contexts/FriendsContext';

interface Props {
  user: User;
  searched: string;
  friendsText?: string;
}

const Friends: React.FC<Props> = ({ user, searched, friendsText }) => {
  const [usersToDisplay, setUsersToDisplay] = useState([] as User[]);
  const [isAllUsersDisplayed, setIsAllUsersDisplayed] = useState(false);
  const [searchedUser, setSearchedUser] = useState(searched);
  const [foundUsersSearched, setFoundUsersSearched] = useState([] as User[]);

  const handleUsersDisplayed = useCallback(() => {
    if (isAllUsersDisplayed) {
      setUsersToDisplay(user.friends);
    } else {
      setUsersToDisplay(users as User[]);
    }

    setIsAllUsersDisplayed(!isAllUsersDisplayed);
  }, [isAllUsersDisplayed]);

  const { getFriends, getUsersByName, getFriendsByName } = useContext(FriendsContext);

  useEffect(() => {
    setSearchedUser(searched);

    const foundUsers = getUsersByName(searched);
    setFoundUsersSearched(foundUsers as User[]);

    const foundOnFriends = getFriendsByName('Dotson Jennings', searched);
    setUsersToDisplay(foundOnFriends);
  }, [searched]);

  useEffect(() => {
    setUsersToDisplay(getFriends(user.name));
  }, [user]);

  return (
    <>
      <Container>
        <header>
          <h3>{friendsText || 'Your friends'}</h3>
          <AllUsersButton
            onClick={handleUsersDisplayed}
            isAllUsersDisplayed={isAllUsersDisplayed}
          />
        </header>
        <main>
          {usersToDisplay.map((friend: User, index: number) => (
            <Card
              key={index}
              user_id={friend._id}
              name={friend.name}
              age={friend.age}
              company={friend.company}
              phone={friend.phone}
              picture={friend.picture}
            />
          ))}
        </main>
      </Container>
      {!!searched && (
        <Container>

          <div className="other-users-header">
            <h3>All users</h3>
          </div>
          <div className="other-users-content">
            {foundUsersSearched.map((friend: User, index: number) => (
              <Card
                key={index}
                user_id={friend._id}
                name={friend.name}
                age={friend.age}
                company={friend.company}
                phone={friend.phone}
                picture={friend.picture}
              />
            ))}
          </div>
        </Container>
      )}
    </>
  );
};

export default Friends;
