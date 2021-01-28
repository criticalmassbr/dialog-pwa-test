import React, { useState, useEffect } from 'react';

import { useHistory } from "react-router-dom";

import UserService from '../../services/UserService'

import Grid from '../../components/CSSGrid/Grid';
import UserCard from '../../components/Cards/UserCard';
import Filter from '../../components/Filter/Filter'

const UsersPage = props => {
    let history = useHistory();
    const [users, setUsers] = useState([])
    const [filter, setFilter] = useState('')

    const handleCardClick = (_id) => {
        history.push(`/adm/users/view/${_id}`);
    }
    const handleLogoClick = () => {
        history.push(`/adm/users`);
    }

    useEffect(() => {
        refreshUserContent("");
    }, [])

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
        refreshUserContent(event.target.value);
    };

    const refreshUserContent = (filter) => {
        UserService.getAllFilterByName(filter)
            .then(data => {
                console.log("Data: ", data);
                setUsers(data.list);
            });
    }

    const renderCards = (list) => {
        if (list) {
            return list.map((item) => {
                return (
                    <Grid key={item._id}>
                        <UserCard user={item} handleClick={handleCardClick} />
                    </Grid>
                );
            });
        }
        return null
    }

    return (
        <React.Fragment>
            <Filter value={filter} onChange={handleFilterChange} handleLogoClick={handleLogoClick} />
            {renderCards(users)}
        </React.Fragment>
    );
}

export default UsersPage;