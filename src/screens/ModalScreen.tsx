import * as React from 'react';
import {
    Button,
    EmitterSubscription,
    Keyboard,
    KeyboardEvent,
    StyleSheet,
    TextInput,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import { NavigationScreenProp } from 'react-navigation';

import { IItem } from '../components/grocerylist/Item';
import { colors } from '../styles/index.style';

interface State {
    name: string,
    description: string,

    keyboardHeight: number,
}

interface NavigationParams {
    onModalDismiss(name: string, description: string): void,
}

interface Props {
    navigation: NavigationScreenProp<NavigationParams>,
}

export default class ModalScreen extends React.Component<Props, State> {
    keyboardWillShowSub!: EmitterSubscription;
    keyboardWillHideSub!: EmitterSubscription;

    state = {
        name: '',
        description: '',
        keyboardHeight: 0,
    };

    componentWillMount() {
        this.keyboardWillShowSub = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow);
        this.keyboardWillHideSub = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide);
    }

    componentWillUnmount() {
        this.keyboardWillShowSub.remove();
        this.keyboardWillHideSub.remove();
    }

    keyboardWillShow = (e: KeyboardEvent) => {
        this.setState({ keyboardHeight: e.endCoordinates.height });
    }

    keyboardWillHide = () => {
        this.setState({ keyboardHeight: 0 });
    }

    createItem = () => {
        const item: IItem = {
            id: 4,
            name: this.state.name,
            description: this.state.description,
            done: false,
        };
        return item;
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
        const onDismiss = this.props.navigation.getParam('onModalDismiss');

        return (
            <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.2)' }}>
                <TouchableWithoutFeedback style={{ flex:1 }} onPress={ this.handleBackgroundPress }>
                <View style={{flex:1}}>
                </View>
                </TouchableWithoutFeedback>
                <View style={[styles.main, { bottom: this.state.keyboardHeight }]}>
                    <View style={styles.inputContainer}>
                        <TextInput
                            autoFocus={true}
                            blurOnSubmit={false}
                            value={this.state.name}
                            style={styles.input}
                            onChangeText={text => this.setState({ name: text })}
                            placeholder={'Name'}></TextInput>
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            blurOnSubmit={false}
                            value={this.state.description}
                            style={styles.input}
                            onChangeText={text => this.setState({ description: text })}
                            placeholder={'Description'}></TextInput>
                    </View>
                    <Button
                        onPress={() => {
                            onDismiss(this.state.name, this.state.description);
                            this.props.navigation.goBack();
                        }}
                        title="Done"
                    />
                </View>
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
    inputContainer: {
        // borderRadius: 10,
        marginBottom: 10,
        // backgroundColor: 'rgba(0,0,0,0.1)',
    },
    input: {
        fontSize: 17,
        paddingLeft: 8,
        height: 40,
    },
    button: {
        position: 'absolute',
        bottom: 30,
        right: 30,
    },
    container: {

    },
});
