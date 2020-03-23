import styled from 'styled-components'

export const DivGridStyled = styled.div`
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: 1fr;

    grid-gap: 77px 62px;
    width: 60vw;
    padding: 62px;
    background-color: whitesmoke;
    margin: 0 auto;

    @media (min-width: 920px) {
        grid-template-columns: repeat(4, 1fr);
    }
`

export const DivAlbum = styled.div`
    height: 330px;
    max-width:65%;
    margin: 0 auto;
    img {
        width: 100%;
        margin: 0 auto;
        display: block;
    }
    span {
        display: inline-block;
        margin: 10px 0px;
    }
    @media (min-width: 920px) {
        height: 150px;
        max-width: 100%;
    }
`