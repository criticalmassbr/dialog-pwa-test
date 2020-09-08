import React from 'react';
import styled from 'styled-components'

const UserCard = styled.div`
    margin: 1rem;
    padding: 1rem;
    border: 1px solid #aaa;
    border-radius: 20px;
`
const UserCardImage = styled.img`
    border-radius: 20px;
    width: 100%;
`
const UserCardParagraph = styled.p`
    color: #888;
    font-size: 15px;
    line-height: 20px;
`

export default (props) => {
    const { user, handleClick } = props
    return (
        <UserCard onClick={() => handleClick(user._id)}>
            <UserCardImage src={user.picture} alt="User" />
            <UserCardParagraph>
                Name: {user.name} <br />
                Age: {user.age}<br />
                EyeColor: {user.eyeColor}<br />
                Company: {user.company}<br />
                Email: {user.email}
            </UserCardParagraph>
        </UserCard>
    );
}
