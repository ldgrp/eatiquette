import { Ionicons } from '@expo/vector-icons';
import * as React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
} from 'react-native';
import { NavigationComponent } from 'react-navigation';

import { ListItem } from 'store/grocery/types';
import GroceryList from 'components/grocery/GroceryList';
import { GROCERYLIST } from 'static/grocery';
import { colors } from 'styles/index.style';

interface State {
    items: ListItem[],
    counter: number,
    isInput: boolean
}

interface Props {
    navigation: NavigationComponent
}

export default class GroceryListScreen extends React.Component<Props, State> {
    static navigationOptions = {
        title: 'Grocery List',
    };

    state = {
        items: GROCERYLIST,
        counter: GROCERYLIST.length,
        isInput: false,
    };

    handleDone = (id: number) => {
        this.setState((prevState) => {
            const items = prevState.items.map((item) => {
                if (id === item.id) {
                    item.item.done = !item.item.done;
                }
                return item;
            });
            return {
                items,
            };
        });
    }

    handleAddItem = (item: ListItem) => {
        this.setState({
            items: [...this.state.items, item],
            counter: this.state.counter + 1,
        });
    }

    handleRemoveItem = (id: number) => {
        this.setState({
            items: this.state.items.filter(item => item.id !== id),
        });
    }

    handleOnModalDismiss = (name: string, description: string) => {
        const trimName = name.trim();
        const trimDescription = description.trim();
        if (trimName === '' && trimDescription === '') {
            return;
        }
        const item: ListItem = {
            item: {
                name: trimName,
                description: trimDescription,
                done: false,
            },
            id: this.state.counter,
        };

        this.handleAddItem(item);
    }

    render() {
        return (
            <SafeAreaView style={styles.main}>
                <GroceryList items={this.state.items}/>
                <Ionicons
                    name={'ios-add-circle'}
                    size={60}
                    color={'#2AC940'}
                    style={styles.button}
                    onPress={() =>
                        this.props.navigation.navigate('Modal', {
                            onModalDismiss: this.handleOnModalDismiss,
                        })
                    }
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
