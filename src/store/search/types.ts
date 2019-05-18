import { Recipe } from 'store/recipes/types';

export const FETCH_RECIPES = 'FETCH_RECIPES';
export const REQUEST_RECIPES = 'REQUEST_RECIPES';
export const RECIEVE_RECIPES = 'RECIEVE_RECIPES';
export const INVALIDATE_SEARCH = 'INVALIDATE_SEARCH';

export interface SearchState {
    recipes: Recipe[]
    isValid: boolean
    isFetching: boolean
    lastUpdated: number | undefined
}

interface FetchRecipesAction {
    type: typeof FETCH_RECIPES
    keyword: string
}

interface RecieveRecipesAction {
    type: typeof RECIEVE_RECIPES
    recipes: Recipe[]
    lastUpdated: number
}

interface RequestRecipesAction {
    type: typeof REQUEST_RECIPES
}

interface InvalidateSearchAction {
    type: typeof INVALIDATE_SEARCH
}

export type SearchActionTypes = FetchRecipesAction |
                                RecieveRecipesAction |
                                RequestRecipesAction |
                                InvalidateSearchAction;
