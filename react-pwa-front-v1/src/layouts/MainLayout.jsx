import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Container from '../components/Container/Container';
import Footer from '../components/Footer/Footer'

import UsersPage from '../views/users/UsersPage';
import ViewUserPage from '../views/users/ViewUserPage';

import idb from '../storage/idb';


class MainLayout extends Component {
    constructor(props) {
        super(props);
        idb.set("network-status", 1);
    }
    storeNetworkStatus = (event) => {
        idb.set("network-status", event.type === 'offline' ? 0 : 1);
    }

    componentDidMount() {
        window.addEventListener('offline', this.storeNetworkStatus)
        window.addEventListener('online', this.storeNetworkStatus)
    }

    componentWillUnmount() {
        window.removeEventListener('online', this.storeNetworkStatus)
        window.removeEventListener('offline', this.storeNetworkStatus)
    }
    render() {
        return (
            <Container>
                <Switch>
                    <Route exact path='/adm/users' component={UsersPage} />
                    <Route path='/adm/users/view/:id' component={ViewUserPage} />
                </Switch>
                <Footer />
            </Container>
        );
    }
}

MainLayout.propTypes = {
};

export default MainLayout;
