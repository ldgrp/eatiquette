import { ADD_RECIPE, DELETE_RECIPE, Recipe, RecipeActionTypes, RecipeId } from './types';

export function addRecipe(recipeId: RecipeId, recipe: Recipe): RecipeActionTypes {
    return {
        recipeId,
        recipe,
        type: ADD_RECIPE,
    };
}

export function deleteRecipe(recipeId: number): RecipeActionTypes {
    return {
        recipeId,
        type: DELETE_RECIPE,
    };
}
