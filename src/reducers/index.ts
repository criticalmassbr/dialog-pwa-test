import { combineReducers, createStore } from 'redux'
import { createBrowserHistory } from 'history'
import { connectRouter } from 'connected-react-router'
import appReducers from './app.reducers'

let history = createBrowserHistory();

export default {
    createStore: function () {
        return createStore(combineReducers({
            router: connectRouter(history),
            app: appReducers,
        }));
    },
    getHistory: function () {
        return history;
    }
}