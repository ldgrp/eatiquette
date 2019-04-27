import * as React from 'react';
import { 
    SafeAreaView,
    StyleSheet, 
    ScrollView, 
    Text 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../styles/index.style';
import { GROCERYLIST } from '../static/grocery';

import Item, { IItem } from '../components/grocerylist/Item';

type State = {items: IItem[], counter: number, isInput: boolean};
type Props = {};
export default class GroceryListScreen extends React.Component<Props, State> {
    state = {
        items: GROCERYLIST,
        counter: GROCERYLIST.length,
        isInput: false,
    };

    static navigationOptions = {
        title: 'Grocery List',
    };

    handleDone = (id: number) => {
        this.setState((prevState) => {
            const items = prevState.items.map((item) => {
                if (id == item.id) {
                    item.done = !item.done;
                }
                return item;
            });
            return {
                items,
            };
        })
    }

    handleAddItem = (item: IItem) => {
        this.setState({
            items: [...this.state.items, item],
            counter: this.state.counter + 1
        });
    }

    handleRemoveItem = (id: number) => {
        this.setState({
            items: this.state.items.filter(item => item.id !== id)
        });
    }

    render() {
        return (
            <SafeAreaView style={styles.main}>
            <ScrollView style={styles.container}>
            {
                this.state.items.map((item) => 
                    <Item 
                        key={item.id}
                        id={item.id}
                        name={item.name} 
                        description={item.description} 
                        done={item.done}
                        setDone={this.handleDone} />
                )
            }
            </ScrollView>
            <Ionicons 
                name={'ios-add-circle'} 
                size={60} 
                color={'#2AC940'} 
                style={styles.button}
                onPress={() => this.setState({isInput: true})}/>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: colors.background, 
    },
    button:{
        position: 'absolute',
        bottom: 30,
        right: 30,
    },
    container: {

    }
});
