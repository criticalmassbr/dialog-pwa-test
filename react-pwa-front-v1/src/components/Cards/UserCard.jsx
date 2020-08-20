import React from 'react';

import './UserCard.css'

export default (props) => {
    const { user, handleClick } = props
    return (
        <div className='UserCard' onClick={() => handleClick(user._id)}>
            <img src={user.picture} alt="User" />
            <p>
                Name: {user.name} <br />
                Age: {user.age}<br />
                EyeColor: {user.eyeColor}<br />
                Company: {user.company}<br />
                Email: {user.email}
            </p>
        </div>
    );
}
