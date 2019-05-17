import { Meals, RecipeId } from 'store/recipes/types';

export const ADD_RECIPE_PLAN = 'ADD_RECIPE_PLAN';
export const DELETE_RECIPE_PLAN = 'DELETE_RECIPE_PLAN';

export type MealPlanId = number;

export interface MealPlan {
    id: number,
    recipes: RecipeId[],
    name: Meals,
    date: Date,
    counter: number,
}

export interface MealPlanState {
    mealPlans: Record<number, MealPlan>,
    counter: number,
}

interface AddRecipePlanAction {
    type: typeof ADD_RECIPE_PLAN,
    recipeId: number,
    mealPlanId: number,
}

interface DeleteRecipePlanAction {
    type: typeof DELETE_RECIPE_PLAN,
    recipeId: number,
    mealPlanId: number,
}

export type MealPlanActionTypes = AddRecipePlanAction |
                                  DeleteRecipePlanAction;
