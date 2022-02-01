import { useContext } from "react";
import { UsersContext } from "../../providers/users";
const Home = () => {
  const { friends, user } = useContext(UsersContext);
  console.log(friends);
  console.log(user);
  return <h1>Home page</h1>;
};
export default Home;
