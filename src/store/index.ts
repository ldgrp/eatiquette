import { combineReducers, createStore, applyMiddleware } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunkMiddleware from 'redux-thunk';

import { groceryReducer } from './grocery/reducers';
import { mealPlanReducer } from './mealplan/reducers';
import { recipeReducer } from './recipes/reducers';
import { searchReducer } from './search/reducers';
import { buddyReducer } from './buddy/reducers';

const rootReducer = combineReducers({
    grocery: groceryReducer,
    mealPlan: mealPlanReducer,
    recipes: recipeReducer,
    search: searchReducer,
    buddy: buddyReducer,

});

const persistConfig = {
    storage,
    key: 'root', // TODO: What the fuck is this?
    blacklist: ['search', 'buddy'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer,
                                 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
                                 applyMiddleware(
                                     thunkMiddleware,
                                 ));

export const persistor = persistStore(store);

export type AppState = ReturnType<typeof rootReducer>;
