import * as React from 'react';
import { TouchableOpacity, Text, Button, StyleSheet, View, Image, requireNativeComponent, Platform } from 'react-native';
import { AppState } from 'store';
import { Recipe, RecipeId } from 'store/recipes/types';
import { colors } from 'styles/index.style';

interface Props {
    isLoaded: boolean
    recipeId: RecipeId
    recipe: Recipe
}

export default class RecipeCard extends React.PureComponent<Props> {
    render() {
        const { recipe } = this.props;

        const sep = '· ';

        const hours = Math.floor(recipe.readyInMinutes / 60);
        const minutes = recipe.readyInMinutes % 60;

        const hoursLabel = hours > 0 ? `${hours}h ` : '';
        const minutesLabel = minutes > 0 ? `${minutes}m` : '';
        const servings = (recipe.servings.match('^[^\\d]*(\\d+)') || ['2'])[0];
        const servingsLabel = servings === '1' ? `${servings} serving` : `${servings} servings`;
        const caloriesLabel = `${recipe.calories} cal`;

        const image = { uri: recipe.image };

        return (
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image source={image} style={styles.image}/>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{recipe.name}</Text>
                    <Text style={styles.subtitle}>
                        {caloriesLabel} {sep}
                        {hoursLabel}{minutesLabel} {sep}
                        {servingsLabel}
                    </Text>
                </View>
            </View>
        );
    }
}

const IS_IOS = Platform.OS === 'ios';
const entryBorderRadius = 8;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: 300,
        margin: 20,
        marginBottom: 10,
        borderRadius: entryBorderRadius,

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        elevation: 8,
    },
    imageContainer: {
        flex: 1,
        marginBottom: IS_IOS ? 0 : -1, // Prevent a random Android rendering issue
        borderRadius: entryBorderRadius,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        overflow: 'hidden',
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',
        height: undefined,
        width: undefined,
    },
    title: {
        color: colors.black,
        fontSize: 20,
        fontWeight: '500',
        textAlign: 'center',
    },
    subtitle: {
        color: colors.subtitleBlack,
        fontSize: 11,
        textAlign: 'center',
    },
    textContainer: {
        padding: 10,
        paddingTop: 6,
    },
});