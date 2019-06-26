import * as React from 'react';
import { Provider } from 'react-redux';

import { persistor, store } from './store/index';

import AppNavigator from './navigation/AppNavigator';
import { Font, AppLoading } from 'expo';

interface State {
    isLoadingComplete: boolean
    isLoggedIn: boolean
}

export default class App extends React.Component<{}, State> {
    state = {
        isLoadingComplete: false,
        isLoggedIn: false,
    };

    async componentWillMount() {
        // TODO: Fix hacky
        await Font.loadAsync({ 'MaterialIcons':
            require('@expo/vector-icons/src/vendor/react-native-vector-icons/Fonts/MaterialIcons.ttf') });
        await Font.loadAsync({ 'Material Icons':
            require('@expo/vector-icons/src/vendor/react-native-vector-icons/Fonts/MaterialIcons.ttf') });
        await Font.loadAsync({ 'Ionicons':
            require('@expo/vector-icons/src/vendor/react-native-vector-icons/Fonts/Ionicons.ttf') });
        this.setState({ isLoadingComplete: true });
    }

    render() {
        const { isLoadingComplete, isLoggedIn } = this.state;
        
        return !isLoadingComplete ? <AppLoading /> : (
            <Provider store={ store }>
                <AppNavigator />
            </Provider>
        );
    }
}
