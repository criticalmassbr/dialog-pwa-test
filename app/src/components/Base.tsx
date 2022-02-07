import styled from "styled-components"
import {createGlobalStyle} from "styled-components"

export const GlobalStyle = createGlobalStyle`
	body{
		margin: 0px;
		width: 100vw;
		height: 100vh;
		padding: 0px;
		font-family: Arial;
		background-color: #FFF;
	}
`

export const Panel = styled.div`
    margin: 10px 0px;
`;
export const Card = styled.span`
    height: 380px;
    width: 260px;
    background-color: #ffffff;
    display: inline;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 2px 2px 2px lightgray;
    color: gray;

    img{
        width: 260px;
        height: 260px;
        background-color: gray
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
    width: 100vw;
    padding:10px 20px;
    overflow-x: auto;
    margin: 10px 0px;
    box-sizing: border-box;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    justify-items: center;
    grid-gap: 40px;
`;

export const CardDescription = styled.div`
    padding: 10px;
    font-size: 13px;

    div{
        margin-bottom: 4px;
    }
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