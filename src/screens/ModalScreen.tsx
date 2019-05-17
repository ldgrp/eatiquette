import * as React from 'react';
import {
    EmitterSubscription,
    Keyboard,
    KeyboardEvent,
    Platform,
    StyleSheet,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import { NavigationScreenProp } from 'react-navigation';

import AddToolbar from 'components/grocery/AddToolbar';
import { colors } from 'styles/index.style';

interface State {
    name: string,
    description: string,
    keyboardHeight: number,
}

interface NavigationParams {
    onModalDismiss(name: string, description: string): void,
}

interface Props {
    addItem: (name: string, description: string) => void,
    navigation: NavigationScreenProp<NavigationParams>,
}

export default class ModalScreen extends React.Component<Props, State> {
    keyboardShowSub!: EmitterSubscription;
    keyboardHideSub!: EmitterSubscription;

    state = {
        name: '',
        description: '',
        keyboardHeight: 0,
    };

    componentWillMount() {
        const keyboardShow = Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow';
        const keyboardHide = Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide';

        this.keyboardShowSub = Keyboard.addListener(keyboardShow, this.handleKeyboardShow);
        this.keyboardHideSub = Keyboard.addListener(keyboardHide, this.handleKeyboardHide);
    }

    componentWillUnmount() {
        this.keyboardShowSub.remove();
        this.keyboardHideSub.remove();
    }

    handleKeyboardShow = (e: KeyboardEvent) => {
        this.setState({ keyboardHeight: e.endCoordinates.height });
    }

    handleKeyboardHide = () => {
        this.setState({ keyboardHeight: 0 });
    }

    handleBackgroundPress = () => {
        const { name, description } = this.state;
        const trimName = name.trim();
        const trimDescription = description.trim();

        if (trimName === '' && trimDescription === '') {
            this.props.navigation.goBack();
        }
        return;
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableWithoutFeedback
                    style={{ flex:1 }}
                    onPress={ this.handleBackgroundPress }>
                <View style={{ flex:1 }}>
                </View>
                </TouchableWithoutFeedback>
                <AddToolbar style={[styles.main, { bottom: this.state.keyboardHeight }]}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main: {
        paddingTop: 10,
        paddingBottom: 5,
        paddingHorizontal: 10,
        flex: 1,
        backgroundColor: colors.background,
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
        flexDirection: 'column',
        position: 'absolute',
        width: '100%',
    },
    button: {
        position: 'absolute',
        bottom: 30,
        right: 30,
    },
    container: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
    },
});
