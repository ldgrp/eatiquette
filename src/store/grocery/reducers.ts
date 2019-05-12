import { 
    ADD_ITEM,
    DELETE_ITEM,
    GroceryActionTypes,
    Item,
    ListItem,
    ListState,
} from './types';

const initialState: ListState = {
    items: [],
    id: 0,
};

export function groceryReducer(state = initialState, action: GroceryActionTypes): ListState {
    switch (action.type) {
    case ADD_ITEM:
        return {
            items: [...state.items, { item: action.item, id: state.id }],
            id: state.id + 1,
        };
    case DELETE_ITEM:
        return {
            items: state.items.filter(
                item => item.id !== action.id,
            ),
            ...state,
        };
    default:
        return state;
    }
}
