import React from 'react';

import './Container.css'

export default (props) => {
    const { children } = props
    return (
        <div className='container'>
            {children}
        </div>
    );
}
