export const ADD_RECIPE = 'ADD_RECIPE';
export const DELETE_RECIPE = 'DELETE_RECIPE';

export type IngredientId = number;
export type RecipeId = number;
export type RecipeStep = string;

export interface Recipe {
    id: RecipeId
    name: string
    image: string
    readyInMinutes: number
    calories: number
    servings: number
    meals: Meals[]
    vegetarian: boolean
    vegan: boolean
    cheap: boolean
    glutenFree: boolean
    eatiquetteScore: number
    rating: number
    pricePerServing?: number
    ingredients?: Ingredient[]
    steps?: RecipeStep[]
}

export interface Ingredient {
    id: IngredientId
    name: string
    quantity?: number
    units?: string
}

export type Meals = 'Breakfast' | 'Lunch' | 'Dinner' | 'Snacks';

export interface RecipeState {
    recipes: Record<RecipeId, Recipe>
}

interface AddRecipeAction {
    type: typeof ADD_RECIPE
    recipeId: RecipeId
    recipe: Recipe
}

interface DeleteRecipeAction {
    type: typeof DELETE_RECIPE
    recipeId: RecipeId
}

export type RecipeActionTypes = AddRecipeAction | DeleteRecipeAction;