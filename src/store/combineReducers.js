import { combineReducers } from "redux";
import currentUser from "./reducers/currentUser";
import indexOfCurrentRecipe from "./reducers/indexOfCurrentRecipe";
import recipes from "./reducers/recipes";
import ingredients from "./reducers/ingredients";
import avaliableRecipes from "./reducers/avaliableRecipes";

export default combineReducers({
   currentUser,
   indexOfCurrentRecipe,
   recipes,
   ingredients,
   avaliableRecipes,
});
