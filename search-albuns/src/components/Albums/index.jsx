import React from 'react'
import PropTypes from 'prop-types';    
import { DivGridStyled, DivAlbum } from './styles';

export default function AlbumsComponent({ albums = [] }) {
    return (
        <DivGridStyled>
            {
                albums.map(el => 
                    <DivAlbum>
                        <img src={el.image} />
                        <span>{el.name}</span>
                    </DivAlbum>
                )
            }
        </DivGridStyled>
    )
}

AlbumsComponent.propTypes = {
    albums: PropTypes.array
}
