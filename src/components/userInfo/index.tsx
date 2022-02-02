import { useContext } from "react";
import { UsersContext } from "../../providers/users";
import { UserContainer, UserInfoText } from "./style";

const UserInfo = () => {
  const { user } = useContext(UsersContext);
  return (
    <UserContainer>
      <img src={user?.profilePic} alt="" />
      <UserInfoText>
        <p>
          <b>Name:</b> {user?.name}
        </p>
        <p>
          <b>Age:</b> {user?.age}
        </p>
        <p>
          <b>Email:</b> {user?.email}
        </p>
      </UserInfoText>
    </UserContainer>
  );
};
export default UserInfo;
