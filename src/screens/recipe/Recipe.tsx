import * as React from 'react';
import { Image, ScrollView, StyleSheet, Text, SafeAreaView, View, StatusBar, Dimensions, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import { colors } from 'styles/index.style';
import { NavigationComponent } from 'react-navigation';
import { Recipe } from 'store/recipes/types';
import { LinearGradient } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import IngredientItem from 'components/recipe/IngredientItem';
import Ingredients from 'components/recipe/Ingredients';
import Steps from 'components/recipe/Steps';
import RecipeInformation from 'components/recipe/RecipeInformation';
import Ring from 'components/Ring';

interface Props {
    navigation: NavigationComponent
}

interface HeaderProps {
    recipe: Recipe
}

const Header = (props: HeaderProps) => {
    const { recipe } = props;

    const gradient = ['rgba(0,0,0,0.4)', 'transparent', 'transparent', 'rgba(0,0,0,0.6)'];

    return (
        <View style={headerStyles.container}>
            <Image source={{ uri: recipe.image }} style={headerStyles.image}/>
            <LinearGradient colors={gradient} style={headerStyles.overlay}/>
            <View style={headerStyles.textContainer}>
                <Text style={headerStyles.text}>
                    {recipe.name}
                </Text>
            </View>
        </View>
    );
};

const Bar = (props) => {
    return (
        <View style={styles.bar}>
            <View style={styles.barLeft}>
            <TouchableOpacity onPress={props.goBack}>
                <Ionicons size={30} name={'ios-arrow-back'} color={'white'} />
            </TouchableOpacity>
            </View>
            <View style={styles.barRight}>
            <TouchableOpacity>
                <Ionicons style={{paddingLeft: 20}} size={30} name={'ios-heart-empty'} color={'white'} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Ionicons style={{paddingLeft: 20}} size={30} name={'ios-add-circle-outline'} color={'white'} />
            </TouchableOpacity>
            </View>
        </View>
    )
}

const SCREEN_WIDTH = Dimensions.get('screen').width;

export default class RecipeScreen extends React.Component<Props> {
    recipe!: Recipe;

    componentWillMount() {
        const recipe = this.props.navigation.getParam('recipe');
        this.recipe = recipe;
    }

    render() {
        const { navigation } = this.props;
        const recipe = this.recipe;
        const servings = (recipe.servings.match('^[^\\d]*(\\d+)') || ['2'])[0];

        const nutrition = [Math.random(), Math.random(), Math.random()];

        return (
            <ScrollView style={styles.main}>
            <StatusBar hidden={true}/>
            <Header recipe={recipe}/>
            <Bar goBack={() => this.props.navigation.goBack()}/>
            <View style={styles.container}>
                <RecipeInformation
                    readyInMinutes={recipe.readyInMinutes}
                    servings={Number.parseInt(servings, 10)}
                    calories={recipe.calories}
                />
                <View style={styles.nutritionContainer}>
                    <Text style={styles.title}>Nutrition</Text>
                    <View style={styles.nutrition}>
                        <Ring percent={nutrition[0]} label={"Carbohydrates"}/>
                        <Ring percent={nutrition[1]} label={"Protein"}/>
                        <Ring percent={nutrition[2]} label={"Fat"}/>
                    </View>
                </View>
                <Button
                    title={ "Start Cooking" }
                    type="solid"
                    raised
                    onPress={() => navigation.navigate('FocusedRecipe', {
                        ingredients: recipe.ingredients,
                        procedure: recipe.procedure,
                        readyInMinutes: recipe.readyInMinutes,
                    })}
                />
                <View style={styles.wrapper}>
                    <Ingredients data={recipe.ingredients} recipeName={recipe.name} />
                    <Steps data={recipe.procedure} />
                </View>
            </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: colors.background,
    },
    container: {
        paddingVertical: 20,
        paddingHorizontal: 15,
    },
    wrapper: {
        marginVertical: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: '500',
        color: colors.textBlack,
        paddingBottom: 10,
    },
    nutritionContainer: {
        marginBottom: 10,
        paddingVertical: 10,
//        borderTopWidth: StyleSheet.hairlineWidth,
//        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    nutrition: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    bar: {
        position: 'absolute',
        top: 15,
        left: 20,
        right: 20,
        bottom: 0,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    barLeft: {
    },
    barRight: {
        flexDirection: 'row',
    }
});

const { height: viewportHeight } = Dimensions.get('window');

const headerStyles = StyleSheet.create({
    container: {
        flex: 1,
        overflow: 'hidden',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    image: {
        resizeMode: 'cover',
        flex: 1,
        height: viewportHeight * 0.40,
        width: '100%',
    },
    text: {
        fontSize: 34,
        fontWeight: '800',
        color: 'rgba(255, 255, 255, 0.91)',
    },
    textContainer: {
        position: 'absolute',
        left: 20,
        right: 0,
        bottom: 30,
    },
});
