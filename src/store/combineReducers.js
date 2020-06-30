import { combineReducers } from "redux";
import currentUser from "./reducers/currentUser";
// import indexOfCurrentRecipe from "./reducers/indexOfCurrentRecipe";
import allRecipes from "./reducers/allRecipes";
// import ingredients from "./reducers/ingredients";
// import avaliableRecipes from "./reducers/avaliableRecipes";

export default combineReducers({
   currentUser,
   // indexOfCurrentRecipe,
   allRecipes,
   // ingredients,
   // avaliableRecipe
});
