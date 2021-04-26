import React, { useEffect } from 'react';
import Header from '../../components/Header';
import UserList from '../../components/UserList';
import { useData } from '../../hooks/user';


export default function Home() {
    const { users, list } = useData();

    useEffect(() => {
        async function query() {
            await list();
        }
    
        query();
    }, [list]);

    return (
        <>
            <Header />
            {users && <UserList linkUser={true} users={users} /> }
        </>
    )
}