import { ADD_RECIPE, DELETE_RECIPE, RecipeActionTypes, RecipeState } from 'store/recipes/types';

const initialState: RecipeState = {
    recipes: {},
};

export function recipeReducer(state = initialState, action: RecipeActionTypes): RecipeState {
    switch (action.type) {
    case ADD_RECIPE:
        return {
            recipes: { ...state.recipes, [action.recipeId]: action.recipe },
        };
    case DELETE_RECIPE:
        const { [action.recipeId]: _, ...recipes } = state.recipes;

        return {
            recipes,
        };

    default:
        return state;
    }
}
