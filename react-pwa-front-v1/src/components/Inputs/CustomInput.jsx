import React from "react";

import './CustomInput.css';

export default (props) => {
    const { value, onChange } = props;
    return (
        <input
            className="CustomInput"
            type="text"
            value={value}
            onChange={onChange}
        />
    );
}

