import { Ionicons } from '@expo/vector-icons';
import * as React from 'react';
import {
    SafeAreaView,
    StyleSheet,
} from 'react-native';
import { NavigationComponent } from 'react-navigation';

import GroceryList from 'components/grocery/GroceryList';
import { colors } from 'styles/index.style';

interface State {
    isInput: boolean
}

interface Props {
    navigation: NavigationComponent
}

export default class GroceryListScreen extends React.Component<Props, State> {
    static navigationOptions = {
        title: 'Grocery List',
    };

    render() {
        return (
            <SafeAreaView style={styles.main}>
                <GroceryList />
                <Ionicons
                    name={'ios-add-circle'}
                    size={60}
                    color={'#2AC940'}
                    style={styles.button}
                    onPress={() => this.props.navigation.navigate('Modal')}
                />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: colors.background,
    },
    button: {
        position: 'absolute',
        bottom: 30,
        right: 30,
    },
    container: {

    },
});
