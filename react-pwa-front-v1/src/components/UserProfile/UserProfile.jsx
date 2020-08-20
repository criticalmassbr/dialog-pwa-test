import React from "react";
import Grid from '../Grid/Grid';
import Row from '../Row/Row';

import './UserProfile.css'

export default (props) => {
    const { user } = props;
    return (
        <Row additionalClassName="UserProfile">
            <Grid sm='1' md='1' lg='6' xl='6' xll='6'>
                <img src={user.picture} alt="User Profile" />
            </Grid>
            <Grid sm='1' md='1' lg='2' xl='2' xll='2'>
                <p>
                    Name: {user.name} <br />
                    Age: {user.age} <br />
                    Email: {user.email}
                </p>
            </Grid>
        </Row>
    );
}

