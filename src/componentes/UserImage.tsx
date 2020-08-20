import React, { useState } from 'react'
import styled from 'styled-components'


const Img = styled.img`
    max-width:100%;
    width: 100%;
    height:auto;
`

function UserImage({ picture }) {
    return (
        <Img src={picture} />

    );
}

export default UserImage;