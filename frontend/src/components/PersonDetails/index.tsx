import React, { FunctionComponent } from 'react';
import styled from "styled-components";
import { Person } from "../../queries/people/personQueries"

const Avatar = styled.img`
margin-right: 1em;
width:100%;
@media (min-width: 575px) {
  max-width:100px;
};
`;

const Details = styled.div`
margin:1vw;
@media (min-width: 575px) {
display: flex;
flex-wrap: wrap;
};
`

const PersonalInfo = styled.span`
  font-size:1.3em;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
`;

const PersonalInfoWrapper = styled.span`
  display:inline-flex;
  flex-direction:column;
`;

const PersonDetails: FunctionComponent<{ person: Person }> = ({ person }) => {
  const { name, age, email, picture } = person;
  return (
    <Details>
      {picture && <Avatar src={picture} alt="avatar loading..." />}
      <PersonalInfoWrapper>
        <PersonalInfo>{`name: ${name}`}</PersonalInfo>
        <PersonalInfo>{`age: ${age}`}</PersonalInfo>
        <PersonalInfo>{`email: ${email}`}</PersonalInfo>
      </PersonalInfoWrapper>
    </Details>
  );
}

export default PersonDetails;