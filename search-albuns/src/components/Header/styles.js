import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const HeaderStyled = styled.header`
    width: 100vw;
    height: 200px;
    background-color: grey;
    color: white;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
`

export const InputSearchStyled = styled.input`
    border-radius: 20px;
    background-color: whitesmoke;
    color: black;
    border: 2px solid grey;
    padding: 3.5px 35px;

`

export const IconStyled = styled(FontAwesomeIcon)`
    color: grey;
    position: absolute;
    left: 5%;
    top: 20%;
`
export const DivInputWrapperStyled = styled.div`
    position: relative;
    border-radius: 20px;

`