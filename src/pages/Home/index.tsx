import { useContext } from "react";
import { UsersContext } from "../../providers/users";
import FriendCard from "../../components/friendCard";
const Home = () => {
  const { friends } = useContext(UsersContext);

  return <h1>Home page</h1>;
};
export default Home;
