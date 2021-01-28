import React from 'react';

//import './Grid.css'
import styled from 'styled-components'



const Grid = (props) => {
    const { children, column } = props;
    const StyledGrid = styled.div`
        ${column ? `grid-column: ${column};` : ``}
    `;
    return (
        <StyledGrid>
            {children}
        </StyledGrid>
    );
}

export default Grid;
