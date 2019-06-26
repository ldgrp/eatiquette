import { ACTIVATE_BUDDY, BuddyActionTypes, BuddyState, DEACTIVATE_BUDDY } from './types';
const initialState: BuddyState = {
    on: false,
};

export function buddyReducer(state = initialState, action: BuddyActionTypes): BuddyState {
    switch (action.type) {
    case ACTIVATE_BUDDY:
        return{
            ...state,
            on: true,
        };
    case DEACTIVATE_BUDDY:
        return{
            ...state,
            on: false,
        };
    default:
        return state;
    }
}
