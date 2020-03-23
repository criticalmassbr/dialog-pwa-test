import React from 'react'
import PropTypes from 'prop-types';    

import { DivArtistWrapperStyled, ImgArtist } from './styles'

export default function ArtistComponent({ artist, image }) {
    return (
        <DivArtistWrapperStyled>
            <ImgArtist src={image} />
            <h2>{artist}</h2>
        </DivArtistWrapperStyled>
    )
}

ArtistComponent.propTypes = {
    image: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired
}