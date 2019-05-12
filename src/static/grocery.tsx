import { ListItem } from 'store/grocery/types';

export const GROCERYLIST: ListItem[] = [
    {
        item: {
            name: 'Milk',
            description: '2L',
            done: false,
        },
        id: 0,
    },
    {
        item: {
            name: 'Bacon',
            description: '100g',
            done: false,
        },
        id: 1,
    },
    {
        item: {
            name: 'All-Purpose Flour',
            description: '2000g',
            done: true,
        },
        id: 2,
    },
    {
        item: {
            name: 'Salt',
            description: '',
            done: false,
        },
        id: 3,
    },
];
