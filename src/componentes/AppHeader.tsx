import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";
import SearchBar from './SearchBar';

const Header = styled.div`
    @media (max-width: 600px) {
        display: grid;
        padding: 10px 10px 10px 10px;
        grid-template-columns: 3fr 6fr;
        background-color: #fbfbfb;
        border-bottom:solid 1px #e6e6e6;
        margin-bottom:15px;
    }
    @media (min-width: 601px) {
        display: grid;
        padding: 10px;
        grid-template-columns: 1fr 10fr;
        background-color: #fbfbfb;
        border-bottom:solid 1px #e6e6e6;
        margin-bottom:15px;
    }
`;

const Name = styled.div`
    line-height: 35px;
`;

function AppHeader() {

    return (
        <Header>
            <Name>
                <Link to=''>
                    <span className='bold'>My Social</span>
                </Link>
            </Name>
            <SearchBar />
        </Header>
    );
}

export default AppHeader;