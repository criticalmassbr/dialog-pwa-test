import React from "react";
import styled from 'styled-components'

const CustomInput = styled.input`
    padding: 0.7rem;
    border: 1px solid #ccc;
    border-radius: 20px;
    font-size: 20px;
    margin: 20px 0px;
`

export default (props) => {
    const { value, onChange } = props;
    return (
        <CustomInput
            type="text"
            value={value}
            onChange={onChange}
        />
    );
}

