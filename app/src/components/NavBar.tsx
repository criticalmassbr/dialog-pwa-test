import styled from "styled-components";

function SearchInput({className, setFilter}:{className?:string, setFilter: Function}){
    const getValue = (ev:React.FormEvent)=>{ return (ev.target as HTMLInputElement).value }
   
    return(
        <input className={className} type="text" placeholder="Type to search friends" onInput={ev => setFilter(getValue(ev))}/>
    ) 
}

export const Title = styled.span`
    font-size: 30px;
    color: #0EB27B;
    font-weight: bold;
    display: inline;
    margin: 0px 30px 0px 15px;
`;

export const SearchBar = styled(SearchInput)`
    padding: 10px 15px;
    border-radius: 20px;
    border: none;
    min-width: 250px;
    border: 1px solid #0EB27B;
    font-size: 14px;
`;

export const Menu = styled.div`
    min-height: max-content;
    height: max-content;
    padding: 20px;

    ${Title}, ${SearchBar} {
        vertical-align: middle
    }
`;
