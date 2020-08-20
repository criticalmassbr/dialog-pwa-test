import React from 'react'
import styled from 'styled-components'
import UserCard from './UserCard'

const GridDisplay = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(230px,1fr));
  grid-column-gap: 15px;
  grid-row-gap: 1em;
`;

function UserGrid({ users }) {
    users = users || []
    return (
        <GridDisplay>
            {users.map((user) => {
                return <UserCard key={`user${user.email}`} user={user} />
            })}
        </GridDisplay>
    );
}

export default UserGrid;