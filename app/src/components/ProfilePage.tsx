import styled from "styled-components"
import FriendList from "./FriendList";

export const UserInfo = styled.div`
    background-color: lightgray;
    height: 20vh;
`;

export default function ProfilePage(){
    return (
        <div>
            <UserInfo/>
            <FriendList  state=""/>
        </div>
    )
}