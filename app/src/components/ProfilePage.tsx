import styled from "styled-components"
import {useContext} from "react";
import { AppContext } from "./AppContext";

const UserInfo = styled.div`
    background-color: lightgray;
    height: 20vh;
`;

export default function UserPanel(){

    const {profile} = useContext(AppContext);
    console.log(profile)

    return (
        <div>
            <UserInfo>
                <img key="profile_img" src={profile ? profile.picture : ""}></img>
                <div key="profile_text">
                    <div>Name: {profile ? profile.name : "N/A"} </div>
                    <div>Eye Color: {profile ? profile.eyeColor : "N/A"} </div>
                </div>            
            </UserInfo>
        </div>
    )
}