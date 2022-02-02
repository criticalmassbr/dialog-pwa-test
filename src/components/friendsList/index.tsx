import { useContext } from "react";
import { UsersContext } from "../../providers/users";
import FriendCard from "../friendCard";
import { FriendsListContainer } from "./style";

const FriendsList = () => {
  const { friends } = useContext(UsersContext);

  return (
    <FriendsListContainer>
      {friends.map((person, index) => {
        return <FriendCard card={person} key={index}></FriendCard>;
      })}
    </FriendsListContainer>
  );
};
export default FriendsList;
