import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import UserImage from './UserImage'
import UnstyledList from './UnstyledList'

const Card = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.1);
    padding:15px;
    margin: 10px;
    border-radius: 5px;
    max-width: 420px;
    min-height:300px;
`;

const Li = styled.li`
    overflow: hidden;
    text-overflow: ellipsis;
`;

function UserCard({ user }) {

    return (
        <Link to={{ pathname: `/usuario/${user._id}`, state: user }}>
            <Card>
                <UserImage picture={user.picture} />
                <UnstyledList className='text-small'>
                    <Li>Name: <span className='bold'>{user.name}</span> </Li>
                    <Li>Age: <span className='bold'>{user.age}</span></Li>
                    <Li>Eye color: <span className='bold'>{user.eyeColor}</span></Li>
                    <Li>Company: <span className='bold'>{user.company}</span></Li>
                    <Li>Email: <span className='bold'>{user.email}</span></Li>
                </UnstyledList>
            </Card>
        </Link>
    );
}

export default UserCard;