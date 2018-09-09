// @flow

import {
    createStore,
    combineReducers
} from 'redux';
import {
    persistStore,
    persistReducer
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import messages from './messages';


const persistConfig = {
    key: 'root',
    storage,
}

const reducers = combineReducers({
    messages
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(
    persistedReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export const persistor = persistStore(store);
