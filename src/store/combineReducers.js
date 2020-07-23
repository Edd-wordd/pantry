import { combineReducers } from "redux";
import currentUser from "./reducers/currentUser";
import allRecipes from "./reducers/allRecipes";
import editableRecipe from "./reducers/editableRecipe";
import pantry from "./reducers/pantry";
import outOfStock from "./reducers/outOfStock";

export default combineReducers({
   currentUser,
   allRecipes,
   editableRecipe,
   pantry,
   outOfStock,
});
