import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import combineReducers from "./combineReducers";

const initialState = {
   currentUser: {},
   allRecipes: [],
   editableRecipe: {},
   pantry: [],
   outOfStock: [],
};

const store = createStore(combineReducers, initialState, composeWithDevTools());

export default store;
