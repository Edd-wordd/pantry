import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import combineReducers from "./combineReducers";

const initialState = {
   currentUser: {},
   recipes: [],
   ingredients: [],
   indexOfCurrentRecipe: 0,
};

const store = createStore(combineReducers, initialState, composeWithDevTools());

export default store;
