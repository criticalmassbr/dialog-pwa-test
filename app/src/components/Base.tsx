import styled from "styled-components"

export const Panel = styled.div`
    margin: 10px 0px;
`;
export const Card = styled.span`
    height: 340px;
    width: 240px;
    background-color: #ffffff;
    display: inline;
    grid-row-start: 1;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 2px 2px 2px lightgray;
    color: gray;

    a{
        color:#0EB27B
    }

    img{
        width: 240px;
    }

    &:hover{
        transform: scale(1.05);
        cursor: pointer;
        transition: all .2s ease-in-out
    }

    &:active{
        transform: scale(1.1);
    }
`
export const Container = styled.div`
    display: inline-grid;
    grid-gap: 10vw;
    width: 100vw;
    padding:10px;
    overflow-x: auto;
    margin: 10px 0px;
`;

export const CardDescription = styled.div`
    padding: 10px;
    font-size: 13px;
`;

export const PanelTitle = styled.div`

padding:5px;
background-color: #0EB27B;
margin: 10px 0px;
display: inline-block;
min-width: max-content;
border: 2px solid #097752;
border-left: none;
width: 300px;
border-radius: 0px 15px 15px 0px;
color: #FFF;
h3{
    margin: 0px;
    font-size: 20px;
    display: inline-block;
}
`;