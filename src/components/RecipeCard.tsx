import * as React from 'react';
import { Recipe } from 'store/mealplan/types';
import { AppState } from 'store';

interface Props {
    recipeId: number
    recipe: Recipe
}

class RecipeCard extends React.PureComponent<Props> {

}

const mapStateToProps = (state: AppState, ownProps: Partial<Props>) => ({
    recipe: state
})