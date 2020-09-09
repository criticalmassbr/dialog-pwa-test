import React, { FunctionComponent } from 'react';
import styled from "styled-components";
import colors from "../../assets/css/colors";
import { User } from "../../queries/Users/userQueries"

const Container = styled.div`
  background-color:${colors.secondary};
  padding:1em;
  min-width:300px;

  display:grid;
  grid-gap:1em;
  grid-template-columns: 1fr;

  @media (min-width: 660px) {
    grid-template-columns: 1fr 2fr
  };
  @media (min-width: 1000px) {
    grid-template-columns: 1fr 3fr 
  };
  @media (min-width: 1250px) {
    grid-template-columns: 1fr 5fr 
  };

`
const UserInfo = styled.span`
  white-space: nowrap;
  font-size:2em;
  margin-left:30px;
  text-overflow:ellipsis;
  overflow:hidden;
  white-space: nowrap;
  min-width:150px;
  @media (max-width: 450px) {
    font-size:1.2em;
  };
`;

const UserImg = styled.span`
  min-height:200px;
  margin-left:30px;
`;

const UserInfoWrapper = styled.span`
  display:flex;
  flex-direction:column;
  justify-content:center;
  min-width:150px;
`;

const UserDetails: FunctionComponent<{ user: User }> = ({ user }) => {
  const { name, age, email, picture } = user;
  return(
    <Container>
      <UserImg>
        {picture && <img src={picture} alt="avatar loading..."/>}
      </UserImg>
      <UserInfoWrapper>
        <UserInfo>{`Name: ${name}`}</UserInfo>
        <UserInfo>{`Age: ${age}`}</UserInfo>
        <UserInfo>{`Email: ${email}`}</UserInfo>
      </UserInfoWrapper>
    </Container>
  );
}

export default UserDetails;