import { createStore } from 'redux';

import { groceryReducer } from './grocery/reducers';

const store = createStore(groceryReducer);

export default store;
