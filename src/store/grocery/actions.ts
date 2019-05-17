import {
    ADD_ITEM,
    DELETE_ITEM,
    GroceryActionTypes,
    Item,
    REORDER_ITEM,
    TOGGLE_DONE_ITEM,
    TOGGLE_VISIBLE_ITEM,
} from './types';

export function addItem(item: Item): GroceryActionTypes {
    return {
        item,
        type: ADD_ITEM,
    };
}

export function toggleDoneItem(id: number): GroceryActionTypes {
    return {
        id,
        type: TOGGLE_DONE_ITEM,
    };
}

export function reorderItem(id: number, newOrder: number): GroceryActionTypes {
    return {
        id,
        newOrder,
        type: REORDER_ITEM,
    };
}

export function toggleVisibleItem(id: number): GroceryActionTypes {
    return {
        id,
        type: TOGGLE_VISIBLE_ITEM,
    };
}

export function deleteItem(id: number): GroceryActionTypes {
    return {
        id,
        type: DELETE_ITEM,
    };
}
