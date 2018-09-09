// @flow

import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import Auth from './src/screens/Auth';
import AuthWithPin from './src/screens/AuthWithPin';
import Chat from './src/screens/Chat';

import { store, persistor } from './src/reducers';


export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <PersistGate
                    loading={null}
                    persistor={persistor}
                >
                    <Chat />
                </PersistGate>
            </Provider>
        );
    }
}
