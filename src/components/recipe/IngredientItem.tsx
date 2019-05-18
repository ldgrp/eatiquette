import * as React from 'react';
import { View, ViewStyle, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from 'styles/index.style';
import { Dispatch } from 'redux';
import { GroceryActionTypes, Item } from 'store/grocery/types';
import { addItem } from 'store/grocery/actions';
import { connect } from 'react-redux';

interface Props {
    name: string
    recipeName: string
    style: ViewStyle
    addItem: (item: Item) => void
}

interface State {
    done: boolean
}

class IngredientItem extends React.Component<Props, State> {
    state = {
        done: false,
    };

    onPress = () => {
        const { done } = this.state;
        const { name, recipeName } = this.props;
        const item = { name, description: recipeName, done: false };
        this.setState({ done: !done });
        this.props.addItem(item);
    }

    render() {
        const { name, style } = this.props;
        const { done } = this.state;

        return (
            <TouchableOpacity style={[styles.container, style]} onPress={this.onPress}>
            <Ionicons style={[styles.button, done ? styles.buttonDone : null]} size={20} name={
                done ? 'ios-remove-circle' : 'ios-add-circle'
            }/>
            <Text style={[styles.text,
                done ? styles.textDone : null,
            ]}>
            { name }
            </Text>
            </TouchableOpacity>
        )
    }
}

const mapDispatchToProps = (dispatch: Dispatch<GroceryActionTypes>) => ({
    addItem: (item: Item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(IngredientItem);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 10,
    },
    text: {
        flex: 1,
        fontSize: 15,
        color: colors.textBlack,
    },
    textDone: {
        textDecorationLine: 'line-through',
        color: 'rgba(0, 0, 0, 0.5)',
    },
    button: {
        paddingLeft: 2,
        paddingRight: 10,
        color: colors.green,
    },
    buttonDone: {
        color: 'rgba(0,0,0,0.4)',
    },
});
