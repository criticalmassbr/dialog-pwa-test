import styled from "styled-components";

function SearchInput({className}:{className?:string}){
    return(
        <input className={className} type="text" placeholder="Type to search friends" onInput={(ev)=>console.log((ev.target as HTMLInputElement).value)}/>
    ) 
}

const Title = styled.span`
    font-size: 30px;
    color: #0EB27B;
    font-weight: bold;
    display: inline;
    margin: 0px 30px 0px 15px;
`;

const SearchBar = styled(SearchInput)`
    padding: 10px 15px;
    border-radius: 20px;
    border: none;
    min-width: 250px;
    border: 1px solid #0EB27B;
    font-size: 14px;
`;

const Menu = styled.div`
    min-height: max-content;
    height: max-content;
    padding: 20px;

    ${Title}, ${SearchBar} {
        vertical-align: middle
    }
`;

export default function NavBar(){
    return(
        <Menu>
            <Title>MySocial</Title>
            <SearchBar></SearchBar>
        </Menu>
    )
}