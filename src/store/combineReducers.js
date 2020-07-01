import { combineReducers } from "redux";
import currentUser from "./reducers/currentUser";
import allRecipes from "./reducers/allRecipes";
import editableRecipe from "./reducers/editableRecipe";

export default combineReducers({
   currentUser,
   allRecipes,
   editableRecipe,
});
