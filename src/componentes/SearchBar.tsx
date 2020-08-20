import React, { useState } from 'react'
import styled from 'styled-components'
import { useHistory } from "react-router-dom";
import { buscarUsuarios } from '../actions/actions'
import { useDispatch } from 'react-redux';

const SearchBarInput = styled.input`
    border: 1px solid #f1f1f1;
    border-right: none;
    padding: 0 5px 0 5px;
    line-height: 35px;
    border-radius: 5px 0 0 5px;
    outline: none;
`;

const SearchBarButton = styled.button`
    line-height: 35px;
    border: 1px solid #f1f1f1;
    background: #d6d6d6;
    text-align: center;
    color: #fff;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
    user-select: none;
    width: 45px;
`

function SearchBar() {

    const history = useHistory();
    const dispatch = useDispatch();
    const [termoBusca, setTermoBusca] = useState('');

    const onSubmit = function (event:Event) {
        event.preventDefault()
        history.push(`/busca/${termoBusca}`)
        dispatch(buscarUsuarios(termoBusca))
    }

    return (
        <form>
            <SearchBarInput type="search" placeholder="Buscar pelo nome..." value={termoBusca} onChange={e => setTermoBusca(e.target.value)} autoFocus={true} />
            <SearchBarButton type="submit" onClick={onSubmit.bind(this)} >
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13"><g strokeWidth="2" stroke="#6c6c6c" fill="none"><path d="M11.29 11.71l-4-4"/><circle cx="5" cy="5" r="4"/></g></svg>
            </SearchBarButton>
        </form>
    );
}

export default SearchBar;