export const ACTIVATE_BUDDY = 'ACTIVATE_BUDDY';
export const DEACTIVATE_BUDDY = 'DEACTIVATE_BUDDY';

export interface BuddyState {
    on: boolean
}

interface ActivateBuddyAction {
    type: typeof ACTIVATE_BUDDY,
}

interface DeactivateBuddyAction {
    type: typeof DEACTIVATE_BUDDY,
}

export type BuddyActionTypes = ActivateBuddyAction |
                                 DeactivateBuddyAction;
