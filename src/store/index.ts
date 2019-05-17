import { combineReducers, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { groceryReducer } from './grocery/reducers';
import { mealPlanReducer } from './mealplan/reducers';

const rootReducer = combineReducers({
    grocery: groceryReducer,
    mealPlan: mealPlanReducer,
});

const persistConfig = {
    storage,
    key: 'root', // TODO: What the fuck is this?
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer,
                                 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export const persistor = persistStore(store);

export type AppState = ReturnType<typeof rootReducer>;
