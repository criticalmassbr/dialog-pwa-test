import React from 'react'
import PropTypes from 'prop-types';    
import { HeaderStyled, InputSearchStyled, IconStyled, DivInputWrapperStyled } from './styles';
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function HeaderComponent({ input, handleChange }) {
    return (
        <HeaderStyled>
            <h1>Album Finder</h1>
            <DivInputWrapperStyled>
                <IconStyled icon={faSearch} />
                <InputSearchStyled 
                    value={input}
                    onChange={(e) => handleChange(e)}
                    placeholder="Search"
                />
            </DivInputWrapperStyled>
        </HeaderStyled>
    )
}

HeaderComponent.propTypes = {
    input: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired
}