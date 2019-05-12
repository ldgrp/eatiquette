import { ADD_ITEM, DELETE_ITEM, GroceryActionTypes, Item } from './types';

export function addItem(item: Item): GroceryActionTypes {
    return {
        item,
        type: ADD_ITEM,
    };
}

export function deleteItem(id: number): GroceryActionTypes {
    return {
        id,
        type: DELETE_ITEM,
    };
}
