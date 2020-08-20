import { openDB } from 'idb';

const dbPromise = openDB('dialog-pwa-test', 1, {
    upgrade(db) {
        db.createObjectStore('keyval');
    },
});

const idbKeyval = {
    async get(key) {
        return (await dbPromise).get('keyval', key);
    },
    async set(key, val) {
        console.log("Val", val);
        return (await dbPromise).put('keyval', val, key);
    },
    async delete(key) {
        return (await dbPromise).delete('keyval', key);
    },
    async clear() {
        return (await dbPromise).clear('keyval');
    },
    async keys() {
        return (await dbPromise).getAllKeys('keyval');
    },
};

export default idbKeyval;
