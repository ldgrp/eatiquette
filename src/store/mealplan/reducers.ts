import { ADD_RECIPE_PLAN, DELETE_RECIPE_PLAN, MealPlanActionTypes, MealPlanState } from './types';

const initialState: MealPlanState = {
    mealPlans: {},
    counter: 0,
};

export function mealPlanReducer(state = initialState, action: MealPlanActionTypes): MealPlanState {
    switch (action.type) {
    case ADD_RECIPE_PLAN:
        return {
            mealPlans : {...state.mealPlans, [action.mealPlanId]: {
                recipes: [...state.mealPlans[action.mealPlanId].recipes, action.recipeId],
                ...state.mealPlans[action.mealPlanId],
            }},
            counter: state.counter,
        };
    case DELETE_RECIPE_PLAN:
        const { [action.mealPlanId]: mealPlan, ...plans } = state.mealPlans;
        const { [action.recipeId]: recipe, ...recipes } = mealPlan.recipes;

        return {
            mealPlans : {...state.mealPlans, [action.mealPlanId]: {
                recipes,
                ...state.mealPlans[action.mealPlanId],
            }},
            counter: state.counter,
        };
    default:
        return state;
    }
}
