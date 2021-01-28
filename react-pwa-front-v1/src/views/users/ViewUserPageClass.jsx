import React, { Component } from 'react';

import { withRouter } from "react-router-dom";

import UserService from '../../services/UserService'

import Row from '../../components/Row/Row';
import Grid from '../../components/CSSGrid/Grid';
import UserCard from '../../components/Cards/UserCard';
import UserProfile from '../../components/UserProfile/UserProfile'
import Filter from '../../components/Filter/Filter'

class ViewUserPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {},
            users: [],
            filter: "",
            routeId: props.match.params.id,
        };
        this.handleCardClick = this.handleCardClick.bind(this);
        this.handleLogoClick = this.handleLogoClick.bind(this);
    }

    componentDidMount() {
        const { routeId } = this.state;
        this.refreshUserContent(routeId);
    }

    renderCards(list) {
        if (list) {
            return list.map((item) => {
                return (
                    <Grid sm='1' md='1' lg='4' xl='4' xll='4' key={item._id}>
                        <UserCard user={item} handleClick={this.handleCardClick} />
                    </Grid>
                );
            });
        }
        return null;
    }

    handleCardClick(_id) {
        console.log("handleCardClick", _id);
    }

    handleLogoClick() {
        const { history } = this.props;
        history.push(`/adm/users`);
    }

    handleFilterChange = (event) => {
        this.setState({ filter: event.target.value });
    };

    refreshUserContent(filter) {
        UserService.get(filter)
            .then(data => {
                console.log("ViewUserPage Data: ", data);
                this.setState({ user: data.user });
            });
    }

    filteredFriendsList(list, filter) {
        let regexValidator = new RegExp(`${filter.toLowerCase()}`, 'g');
        return list ? list.filter((item) => regexValidator.test(item.name.toLowerCase())) : [];
    }

    render() {
        const { filter, user } = this.state;
        return (
            <React.Fragment>
                <Filter value={filter} onChange={this.handleFilterChange} handleLogoClick={this.handleLogoClick} />
                <UserProfile user={user} />
                <Grid column="1 / -1">
                    <h1> Friends:</h1>
                </Grid>
                {this.renderCards(this.filteredFriendsList(user.friends, filter))}
            </React.Fragment>
        );
    }
}

export default (withRouter)(ViewUserPage);