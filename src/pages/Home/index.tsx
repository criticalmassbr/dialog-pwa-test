import { useContext } from "react";
import { UsersContext } from "../../providers/users";
import FriendCard from "../../components/friendCard";
const Home = () => {
  const { friends } = useContext(UsersContext);

  return <FriendCard card={friends[0]}></FriendCard>;
};
export default Home;
