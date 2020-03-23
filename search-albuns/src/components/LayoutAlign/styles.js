import styled from 'styled-components'

export const DivLayoutAlignStyled = styled.div`
    display: flex;
    flex-flow: ${props => props.flow};
    justify-content: center;
    align-items: center;
    height: 40vh;
`