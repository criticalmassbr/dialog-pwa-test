import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, minmax(100px,1fr));
    grid-auto-rows: auto;
    grid-gap: 1rem;

    @media(max-width: 800px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

export default (props) => {
    const { children } = props
    return (
        <Container>
            {children}
        </Container>
    );
}
