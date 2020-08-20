import React from "react";
import Grid from '../Grid/Grid';
import CustomInput from '../Inputs/CustomInput'
import Row from '../Row/Row';

export default (props) => {
    const { value, onChange, handleLogoClick } = props;
    return (
        <Row>
            <Grid sm='1' md='5' lg='6' xl='6' xll='6'>
                <h1 onClick={handleLogoClick}> MySocial</h1>
            </Grid>
            <Grid sm='1' md='4' lg='4' xl='4' xll='4'>
                <CustomInput
                    value={value}
                    onChange={onChange}
                />
            </Grid>
        </Row>
    );
}

