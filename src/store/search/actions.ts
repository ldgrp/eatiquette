import {
    FETCH_RECIPES,
    INVALIDATE_SEARCH,
    RECIEVE_RECIPES,
    SearchActionTypes,
    REQUEST_RECIPES,
} from './types';

import fetch from 'cross-fetch';

import { Recipe } from 'store/recipes/types';
import { Dispatch } from 'redux';

export function requestRecipes(): SearchActionTypes {
    return {
        type: REQUEST_RECIPES,
    };
}

export function recieveRecipes(recipes: Recipe[]): SearchActionTypes {
    return {
        recipes,
        type: RECIEVE_RECIPES,
        lastUpdated: Date.now(),
    };
}

export function invalidateSearch(): SearchActionTypes {
    return {
        type: INVALIDATE_SEARCH,
    };
}

export function fetchRecipes(keyword: string) {
    return (dispatch: Dispatch<SearchActionTypes>) => {
        dispatch(requestRecipes());

        return fetch(`https://eatiquette.herokuapp.com/search?keyword=${keyword}`)
            .then(
                response => response.json(),
                error => console.log('An error occured', error),
            )
            .then(json =>
                dispatch(recieveRecipes(json)),
            );
    };
}
