import { combineReducers } from "redux";
import currentUser from "./reducers/currentUser";
import allRecipes from "./reducers/allRecipes";
import editableRecipe from "./reducers/editableRecipe";
import pantry from "./reducers/pantry";

export default combineReducers({
   currentUser,
   allRecipes,
   editableRecipe,
   pantry,
});
