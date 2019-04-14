import * as React from 'react';

import AppNavigator from './navigation/AppNavigator';

interface State {
    isLoadingComplete: boolean
}

interface Props {
}

export default class App extends React.Component<Props, State> {
    state = {
        isLoadingComplete: false,
    };

    render() {
        return (
            <AppNavigator />
        );
    }
}
