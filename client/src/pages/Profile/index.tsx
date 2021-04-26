import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Header from '../../components/Header';
import UserList from '../../components/UserList';
import UserProfile from '../../components/UserProfile';
import { Container } from './styles';
import { useData } from '../../hooks/user';

export default function Profile() {
    const { id } = useParams<{id: string}>();

    const { user, profile } = useData();

    useEffect(() => {
        async function query(id: string) {
            await profile(id);
        }

        query(id);
    }, [])
    

    return (
        <Container>
            <Header />
            { !!user && 
                <div>
                    <UserProfile user={user} />
                    <h3>Friends: </h3>
                    <UserList linkUser={false} users={user.friends}/>
                </div>
             }
        </Container>
    )
}