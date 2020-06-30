import actions from "../actions";

export default function avaliableRecipes(state = {}, action) {
   let newState = { ...state };

   switch (action.type) {
      case actions.STORE_COOKED_RECIPE:
         newState.recipeCard = action.payload.recipeCard;
         return newState;
      case actions.UPDATE_INDEX_OF_CURRENT_RECIPE:
         state.index += 1;
         return state;
      default:
         return state;
   }
}
