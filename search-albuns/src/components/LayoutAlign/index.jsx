import React from 'react'
import PropTypes from 'prop-types';    
import { DivLayoutAlignStyled } from './styles'

export default function LayoutAlignComponent({ flow, children }){
    return (
        <DivLayoutAlignStyled flow={flow ? flow : 'row nowrap'}>
            { children }
        </DivLayoutAlignStyled>
    )
}

LayoutAlignComponent.propTypes = {
    flow: PropTypes.string,
    childre: PropTypes.element
}