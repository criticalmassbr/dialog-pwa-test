import React from "react";
import styled from 'styled-components'

import Grid from '../CSSGrid/Grid';
import CustomInput from '../Inputs/CustomInput'

export default (props) => {
    const { value, onChange, handleLogoClick } = props;

    const Logo = styled.h1`
        float:left; margin-right: 1em;
    `;

    return (
        <React.Fragment>
            <Grid column="1 / -1">
                <Logo onClick={handleLogoClick}>MySocial</Logo>
                <CustomInput
                    value={value}
                    onChange={onChange}
                />
            </Grid>
        </React.Fragment>
    );
}

