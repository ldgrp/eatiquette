import { ADD_RECIPE_PLAN, DELETE_RECIPE_PLAN, MealPlanActionTypes } from './types';

export function addRecipe(recipeId: number, mealPlanId: number): MealPlanActionTypes {
    return {
        recipeId,
        mealPlanId,
        type: ADD_RECIPE_PLAN,
    };
}

export function deleteRecipe(recipeId: number, mealPlanId: number): MealPlanActionTypes {
    return {
        recipeId,
        mealPlanId,
        type: DELETE_RECIPE_PLAN,
    };
}
