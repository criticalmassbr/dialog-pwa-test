import React from 'react';

import './Row.css'

export default (props) => {
    const { children, additionalClassName } = props
    return (
        <div className={`row ${additionalClassName}`}>
            {children}
        </div>
    );
}
