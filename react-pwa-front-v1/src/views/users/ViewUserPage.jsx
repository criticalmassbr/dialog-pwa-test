import React, { useEffect, useState } from 'react';

import { useHistory } from "react-router-dom";

import UserService from '../../services/UserService'

import Grid from '../../components/CSSGrid/Grid';
import UserCard from '../../components/Cards/UserCard';
import UserProfile from '../../components/UserProfile/UserProfile'
import Filter from '../../components/Filter/Filter'


const ViewUserPage = props => {
    let history = useHistory();
    const [user, setUser] = useState({})
    const [filter, setFilter] = useState('')
    const [routeId, setRouteId] = useState(props.match.params.id)

    useEffect(() => {
        refreshUserContent(routeId);
    }, [routeId])


    const handleCardClick = (_id) => {
        console.log("handleCardClick", _id);
    }
    const handleLogoClick = () => {
        history.push(`/adm/users`);
    }
    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    const refreshUserContent = (filter) => {
        UserService.get(filter)
            .then(data => {
                setUser(data.user);
            });
    }

    const filteredFriendsList = (list, filter) => {
        let regexValidator = new RegExp(`${filter.toLowerCase()}`, 'g');
        return list ? list.filter((item) => regexValidator.test(item.name.toLowerCase())) : [];
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
        return null;
    }

    return (
        <React.Fragment>
            <Filter value={filter} onChange={handleFilterChange} handleLogoClick={handleLogoClick} />
            <UserProfile user={user} />
            <Grid column="1 / -1">
                <h1> Friends:</h1>
            </Grid>
            {renderCards(filteredFriendsList(user.friends, filter))}
        </React.Fragment>
    );
}

export default ViewUserPage;