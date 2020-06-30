import actions from "../actions";

export default function cookedMealRecipe(state = {}, action) {
   let newState = [...state];

   switch (action.type) {
      case actions.COOKED_MEAL_RECIPE:
         newState.recipes = action.payload;
         return newState;
      default:
         return state;
   }
}
