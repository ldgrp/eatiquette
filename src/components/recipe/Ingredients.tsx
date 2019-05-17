import * as React from 'react';
import { View, ViewStyle, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from 'styles/index.style';
import IngredientItem from './IngredientItem';

interface Props {
    data: string | undefined;
}

export default class Ingredients extends React.PureComponent<Props> {
    render() {
        const { data: rawIngredients } = this.props;

        if (typeof rawIngredients === 'undefined') {
            return <View/>;
        }

        const ingredients = rawIngredients.split('\n');

        return (
            <View style={styles.container}>
                <Text style={styles.title}>Ingredients</Text>
                {
                    ingredients.map((ingredient, i) =>
                        <IngredientItem
                            key={i}
                            name={ingredient}
                            style={
                                i % 2 ? styles.itemAlternate : styles.item
                            }
                        />,
                    )
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 8,
        //paddingHorizontal: 15,
    },
    title: {
        fontSize: 20,
        color: colors.textBlack,
        marginBottom: 10,
        flex: 1,
    },
    item: {
//        backgroundColor: '#e0e0e0',
        borderBottomColor: '#bbb',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    itemAlternate: {
//        backgroundColor: '#eee',
        borderBottomColor: '#bbb',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
});