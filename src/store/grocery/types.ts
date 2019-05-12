export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';

export interface Item {
    name: string,
    description: string,
    done: boolean,
}

export interface ListItem {
    item: Item,
    id: number,
}

export interface ListState {
    items: ListItem[],
    id: number,
}

interface AddItemAction {
    type: typeof ADD_ITEM,
    item: Item
}

interface DeleteItemAction {
    type: typeof DELETE_ITEM,
    id: number,
}

export type GroceryActionTypes = AddItemAction | DeleteItemAction;
