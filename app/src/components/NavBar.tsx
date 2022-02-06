import styled from "styled-components";

function SearchInput({className, setFilter}:{className?:string, setFilter: Function}){
    const getValue = (ev:React.FormEvent)=>{ return (ev.target as HTMLInputElement).value }
   
    return(
        <input className={className} type="text" placeholder="Type to search friends" onInput={ev => setFilter(getValue(ev))}/>
    ) 
}

export const Title = styled.span`
    font-size: 35px;
    color: #FFF;
    font-weight: bold;
    display: inline;
    margin: 0px 20px 0px 15px;

    @media (max-width: 800px){
        display: block;
        text-align:center;
        margin: 10px 0px;
    }
`;

export const SearchBar = styled(SearchInput)`
    padding: 10px 15px;
    border-radius: 20px;
    border: none;
    min-width: 300px;
    border: none;
    font-size: 14px;
`;

export const Menu = styled.div`
    height: max-content;
    margin-bottom: 10px;
    padding: 20px;
    background-color: #0EB27B;
    position: sticky;
    top: 0px;

    ${Title}, ${SearchBar} {
        vertical-align: middle
    }

    @media (max-width: 800px){
        text-align:center;
        padding: 10px;
        
    }
`;
