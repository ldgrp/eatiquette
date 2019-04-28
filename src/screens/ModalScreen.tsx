import * as React from 'react';
import {
    Button,
    KeyboardAvoidingView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';
import { NavigationComponent } from 'react-navigation';

import { IItem } from '../components/grocerylist/Item';
import { colors } from '../styles/index.style';

interface State {
    name: string,
    description: string,
}
interface Props {
    navigation: NavigationComponent,
}

export default class ModalScreen extends React.Component<Props, State> {
    state = {
        name: '',
        description: '',
    };

    createItem = () => {
        const item: IItem = {
            id: 4,
            name: this.state.name,
            description: this.state.description,
            done: false,
        };
        return item;
    }

    render() {
        const thing = this.props.navigation.getParam('onModalDismiss', () => {});
        return (
            <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.2)' }}>
                <KeyboardAvoidingView style={{ flex: 1 }} behavior={'height'}>
                    <View style={styles.main}>
                        <Text style={{ fontSize: 30 }}>This is a modal!</Text>
                        <TextInput autoFocus={true}
                            value={this.state.name}
                            onChangeText={text => this.setState({ name: text })}
                            placeholder={'Name'}></TextInput>
                        <Button
                            onPress={() => { thing(this.state.name); this.props.navigation.goBack(); }}
                            title="Dismiss"
                        />
                    </View>
                </KeyboardAvoidingView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main: {
        marginTop: 200,
        flex: 1,
        backgroundColor: colors.background,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
    },
    button: {
        position: 'absolute',
        bottom: 30,
        right: 30,
    },
    container: {

    },
});
