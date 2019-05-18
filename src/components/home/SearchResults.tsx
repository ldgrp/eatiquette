import * as React from 'react';
import { Recipe } from "store/recipes/types";
import { TouchableOpacity, View } from 'react-native';
import RecipeCard from 'components/RecipeCard';
import { AppState } from 'store';
import { connect } from 'react-redux';
import { withNavigation, NavigationComponent } from 'react-navigation';

interface Props {
    recipes: Recipe[]
    isValid: boolean
    navigation: NavigationComponent
}

class SearchResults extends React.PureComponent<Props> {
    render() {
        const { recipes, isValid } = this.props;

        if (!isValid) {
            return <View />;
        }
        return (
            recipes.map((recipe: Recipe, i: number) =>
            <TouchableOpacity
                key={i}
                activeOpacity={0.9}
                onPress={() => this.props.navigation.navigate('Recipe', { recipe })}>
                <RecipeCard isLoaded={true} recipe={recipe} recipeId={recipe.id}/>
            </TouchableOpacity>
            )
        );
    }
}

const mapStateToProps = (state: AppState) => ({
    recipes: state.search.recipes,
    isValid: state.search.isValid,
});

export default connect(mapStateToProps)(withNavigation(SearchResults));
