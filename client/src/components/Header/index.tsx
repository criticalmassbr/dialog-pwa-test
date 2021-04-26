import React, { useEffect, useState } from 'react';
import { useData } from '../../hooks/user';
import { Container, Search } from './styles';

export default function Header() {
    const [ search, setSearch ] = useState("");
    const { list } = useData();

    const handleSearch = (e: React.FormEvent<HTMLInputElement>) => {
        setSearch(e.currentTarget.value);
    }

    useEffect(() => {
        async function query() {
            await list(search);
        }
        query();
    }, [list, search]);

    return (
        <Container>
            <h4>MySocial</h4>
            <Search onChange={handleSearch} type="text" placeholder="Digite sua busca aqui"/>
        </Container>        
    )
}