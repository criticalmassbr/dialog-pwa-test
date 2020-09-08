import React from "react";
import styled from 'styled-components'

import Grid from '../CSSGrid/Grid';

const UserProfileImage = styled.img`
    width: 100%;
    border-radius: 20px;
    max-width: 140px;
`
const UserProfileParagraph = styled.p`
    padding: 0.7rem;
    font - size: 20px;
    line - height: 30px;
`

export default (props) => {
    const { user } = props;
    return (
        <React.Fragment>
            <Grid>
                <UserProfileImage src={user.picture} alt="User Profile" />
            </Grid>
            <Grid>
                <UserProfileParagraph>
                    Name: {user.name} <br />
                    Age: {user.age} <br />
                    Email: {user.email}
                </UserProfileParagraph>
            </Grid>
        </React.Fragment>
    );
}

