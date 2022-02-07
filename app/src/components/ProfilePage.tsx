import styled from "styled-components"
import { useContext } from "react";
import { AppContext } from "./AppContext";
import {PanelTitle} from "./Base"

const UserInfo = styled.div`
    height: max-content;
    padding: 10px 20px;
    color: #424242;

    a{
        color:#0EB27B
    }

    img{
        width: 100px;
        display: inline-block;
    }

    span{
        display: inline-block;
        vertical-align: top;
        margin-left: 20px;
        font-size: 14px
    }
`;

export default function UserPanel(){

    const {profile} = useContext(AppContext); 
    
    return (
        <div>
            <PanelTitle>
                <h3>{ profile ? profile.name + "'s profile" : "" }</h3>
            </PanelTitle>
            <UserInfo>
                <img key="profile_img" src={profile ? profile.picture : ""}></img>
                <span key="profile_text">
                    <div><b>Name:</b> { profile ? profile.name : "-"} </div>
                    <div><b>Age: </b>{ profile ? profile.age : "-"} </div>
                    <div><b>Email: </b> <a href={profile ? "mailto: "+ profile.email : ""}>{profile ? profile.email : "-"}</a> </div>
                </span>            
            </UserInfo>
        </div>
    )
}