import React, { FunctionComponent, SyntheticEvent, useEffect } from 'react';
import styled from "styled-components";
import colors from "../../assets/css/colors";
import placeholder from "../../assets/avatar_loader.gif";
export interface User {
  id: string
  name?: string
  age?: string
  eyeColor?: string
  company?: string
  email?: string
  picture?: string
  friends?: [User]
  greeting?: string 
}

interface ContainerProps {
  onClick: (event: SyntheticEvent) => any;
}

const Container = styled.div<ContainerProps>`
  border:solid 1px ${colors.contrast};
  border-radius:1em;
  background-color:${colors.secondary};
  box-shadow: 1px 2px #758888;
  display:flex;
  flex-direction:column;
  padding:1em;
  max-height:400px;
  /*width could be replaced by max/min for more fluidity of user card width, fitting more to the screensize:*/
  /* 
    min-width: 240px; 
    max-width:400px;
  */ 
  width:250px;
  cursor:pointer;
`
const UserInfo = styled.span`
  width:calc(100%);
  text-overflow:ellipsis;
  overflow:hidden;
  white-space: nowrap;
`;
const UserImg = styled.span`
  min-height:200px;
  margin:auto;
`;
const UserInfoArea = styled.span`
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  margin:auto;
`;

const UserCard: FunctionComponent<{ user: User, onClick: Function }> = ({ user, onClick }) => {
  const { name, age, eyeColor, company, email, picture } = user;
  const handler = (user: User) => {
    window.scrollTo({ top: window.screenTop });
    onClick(user);
  }
  useEffect(() => {
    // Page is loaded
    const objects = document.getElementsByClassName('asyncImage');
    Array.from(objects).forEach((item: any) => {
      // Start loading image
      const img = new Image();
      img.src = item.dataset.src;
      // Once image is loaded replace the src of the HTML element
      img.onload = () => {
        item.classList.remove('asyncImage');
        return item.nodeName === 'IMG' ? 
          item.src = item.dataset.src :        
          item.style.backgroundImage = `url(${item.dataset.src})`;
      };
    });
  }, [])
  return(
    <Container onClick={(event: SyntheticEvent) => { event.preventDefault(); handler(user) }} data-testid="userCard">
      <UserImg id="imgContainer">
        <img src={placeholder} alt="avatar loading..." className="asyncImage" data-src={picture}/>
      </UserImg>
      <UserInfoArea>
        <UserInfo data-testid={name}>{`Name: ${name}`}</UserInfo>
        <UserInfo>{`Age: ${age}`}</UserInfo>
        <UserInfo>{`Eye color: ${eyeColor}`}</UserInfo>
        <UserInfo>{`Company: ${company}`}</UserInfo>
        <UserInfo>{`Email: ${email}`}</UserInfo>
      </UserInfoArea>
    </Container>);
}


export default UserCard;