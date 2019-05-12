import * as React from 'react';

import AppNavigator from './navigation/AppNavigator';

interface State {
    isLoadingComplete: boolean
    isLoggedIn: boolean
}

export default class App extends React.Component<{}, State> {
    state = {
        isLoadingComplete: false,
        isLoggedIn: false,
    };

    render() {
        return (
            <AppNavigator />
        );
    }
}
