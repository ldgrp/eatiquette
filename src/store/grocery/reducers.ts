import {
    ADD_ITEM,
    DELETE_ITEM,
    GroceryActionTypes,
    ListState,
    TOGGLE_DONE_ITEM,
    TOGGLE_VISIBLE_ITEM,
} from './types';

const initialState: ListState = {
    items: {},
    counter: 0,
};

export function groceryReducer(state = initialState, action: GroceryActionTypes): ListState {
    switch (action.type) {
    case ADD_ITEM:
        const newItem = { ...action.item, order: Object.keys(state.items).length, visible: true };
        return {
            items: { ...state.items, [state.counter + 1]: newItem },
            counter: state.counter + 1,
        };
    case TOGGLE_DONE_ITEM:
        return {
            items: { ...state.items,
                [action.id]: {
                    ...state.items[action.id],
                    done: !state.items[action.id].done,
                },
            },
            counter: state.counter,
        };
    case TOGGLE_VISIBLE_ITEM:
        return {
            items: { ...state.items,
                [action.id]: {
                    ...state.items[action.id],
                    visible: !state.items[action.id].visible,
                },
            },
            counter: state.counter,
        };
    case DELETE_ITEM:
        const { [action.id]: _, ...items } = state.items;
        return {
            items,
            counter: state.counter,
        };
    default:
        return state;
    }
}
