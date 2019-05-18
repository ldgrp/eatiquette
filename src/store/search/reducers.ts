import {
    FETCH_RECIPES,
    INVALIDATE_SEARCH,
    RECIEVE_RECIPES,
    SearchState,
    SearchActionTypes,
    REQUEST_RECIPES,
} from './types';


const initialState: SearchState = {
    recipes: [],
    isValid: false,
    isFetching: false,
    lastUpdated: undefined,
};

export function searchReducer(state = initialState, action: SearchActionTypes): SearchState {
    switch (action.type) {
    case REQUEST_RECIPES:
        return {
            ...state,
            isFetching: true,
            isValid: false,
        };

    case RECIEVE_RECIPES:
        return {
            recipes: action.recipes,
            lastUpdated: action.lastUpdated,
            isValid: true,
            isFetching: false,
        }
    case INVALIDATE_SEARCH:
        return {
            ...state,
            isValid: false,
        };
    default:
        return state;
    }
}
