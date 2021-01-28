import {
    fetchQuery
} from 'relay-runtime';

import RelayEnvironment from '../RelayEnvironment';
import ListUsersQuery from './querys/ListUsers'
import getSingleUserById from './querys/getSingleUserById'

import idb from '../storage/idb';

class UserService {
    async getAll() {
        let users = [];
        console.log("Network Status: ", await idb.get('network-status'));
        if (await idb.get('network-status')) {
            users = await fetchQuery(RelayEnvironment, ListUsersQuery, { filter: "" });
            await idb.set('users', users);
        }
        if (!users || users.length === 0) {
            let list = await idb.get('users');
            users = list ? list : [];
        }
        return users;
    }

    async get(id) {
        let user = {}
        if (await idb.get('network-status')) {
            user = await fetchQuery(RelayEnvironment, getSingleUserById, { _id: id });
            await idb.set(id, user);
        }
        if (!user) {
            let localUser = await idb.get(id);
            user = localUser ? localUser : {};
        }
        return user;
    }

    async getAllFilterByName(filter) {
        let users = [];
        console.log("Network Status: ", await idb.get('network-status'));
        if (await idb.get('network-status')) {
            users = await fetchQuery(RelayEnvironment, ListUsersQuery, { filter });
            await idb.set('users', users);
        }
        if (!users || users.length === 0) {
            let list = await idb.get('users');
            let regexValidator = new RegExp(`${filter.toLowerCase()}`, 'g');
            users = list ? list.filter((user) => regexValidator.test(user.name.toLowerCase())) : [];
        }
        return users;
    }
}

export default new UserService();