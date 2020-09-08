import React, { useEffect, useCallback } from 'react';
import { Route, Switch } from 'react-router-dom';

import Container from '../components/Container/Container';
import Footer from '../components/Footer/Footer'

import UsersPage from '../views/users/UsersPage';
import ViewUserPage from '../views/users/ViewUserPage';

import idb from '../storage/idb';

const MainLayout = prop => {
    const storeNetworkStatus = useCallback((event) => {
        idb.set("network-status", event.type === 'offline' ? 0 : 1);
    }, [])

    useEffect(() => {
        async function initNetworkStatus() {
            await idb.set("network-status", 1)
        }
        initNetworkStatus();
    }, [])

    useEffect(() => {
        async function addListeners() {
            await window.addEventListener('offline', storeNetworkStatus)
            await window.addEventListener('online', storeNetworkStatus)
        }
        addListeners();

        return function cleanup() {
            async function removeListeners() {
                window.removeEventListener('online', storeNetworkStatus)
                window.removeEventListener('offline', storeNetworkStatus)
            }
            removeListeners();
        }

    }, [storeNetworkStatus])

    return (
        <Container>
            <Switch>
                <Route exact path='/adm/users' component={UsersPage} />
                <Route path='/adm/users/view/:id' component={ViewUserPage} />
            </Switch>
            <Footer />
        </Container>
    )
}

MainLayout.propTypes = {
};

export default MainLayout;
