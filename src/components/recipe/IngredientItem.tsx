import * as React from 'react';
import { View, ViewStyle, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from 'styles/index.style';

interface Props {
    name: string
    style: ViewStyle
}

interface State {
    done: boolean
}

export default class IngredientItem extends React.Component<Props, State> {
    state = {
        done: false,
    };

    render() {
        const { name, style } = this.props;
        const { done } = this.state;

        return (
            <TouchableOpacity style={[styles.container, style]} onPress={() => this.setState({ done: !done })}>
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
