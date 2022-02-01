import { useContext } from "react";
import { UsersContext } from "../../providers/users";
const Home = () => {
  const { friends } = useContext(UsersContext);

  return <h1>Home page</h1>;
};
export default Home;
