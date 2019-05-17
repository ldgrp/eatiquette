export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const TOGGLE_DONE_ITEM = 'TOGGLE_DONE_ITEM';
export const TOGGLE_VISIBLE_ITEM = 'TOGGLE_VISIBLE_ITEM';
export const REORDER_ITEM = 'REORDER_ITEM';

export interface Item {
    name: string,
    description: string,
    done: boolean,
}

export interface ListItem extends Item {
    visible: boolean,
    order: number,
}

export interface ListState {
    items: Record<number, ListItem>,
    counter: number,
}

interface AddItemAction {
    type: typeof ADD_ITEM,
    item: Item
}

interface DeleteItemAction {
    type: typeof DELETE_ITEM,
    id: number,
}

interface ToggleDoneItemAction {
    type: typeof TOGGLE_DONE_ITEM,
    id: number,
}

interface ToggleVisibleItemAction {
    type: typeof TOGGLE_VISIBLE_ITEM,
    id: number,
}

interface ReorderItemAction {
    type: typeof REORDER_ITEM,
    id: number,
    newOrder: number,
}

export type GroceryActionTypes = AddItemAction |
                                 DeleteItemAction |
                                 ToggleDoneItemAction |
                                 ToggleVisibleItemAction |
                                 ReorderItemAction;
