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

interface Props {
    navigation: NavigationComponent
}

interface HeaderProps {
    recipe: Recipe
}

const Header = (props: HeaderProps) => {
    const { recipe } = props;

    return (
        <View style={headerStyles.container}>
            <Image source={recipe.image} style={headerStyles.image}/>
            <LinearGradient colors={['transparent', 'rgba(0,0,0,0.6)']} style={headerStyles.overlay}/>
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

export default class RecipeScreen extends React.Component<Props> {
    recipe!: Recipe;

    componentWillMount() {
        const recipe = this.props.navigation.getParam('recipe');
        this.recipe = recipe;
    }

    render() {
        const recipe = this.recipe;

        return (
            <ScrollView style={styles.main}>
            <StatusBar hidden={true}/>
            <Header recipe={recipe}/>
            <Bar goBack={() => this.props.navigation.goBack()}/>
            <View style={styles.container}>
                <RecipeInformation
                    readyInMinutes={recipe.readyInMinutes}
                    servings={recipe.servings}
                    calories={recipe.calories}
                />
                <Button title={ "Start Cooking" } type="solid" raised/>
                <View style={styles.wrapper}>
                    <Ingredients data={recipe.ingredients} />
                    <Steps data={recipe.steps} />
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
        marginVertical: 20,
    },
    bar: {
        position: 'absolute',
        top: 10,
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
