import {
    ACTIVATE_BUDDY,
    BuddyActionTypes,
    DEACTIVATE_BUDDY,
} from './types';

export function activateBuddy(): BuddyActionTypes {
    return {
        type: ACTIVATE_BUDDY,
    };
}

export function deactivateBuddy(): BuddyActionTypes {
    return {
        type: DEACTIVATE_BUDDY,
    };
}
