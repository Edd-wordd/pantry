import actions from "../actions";

export default function editableRecipe(state = {}, action) {
   switch (action.type) {
      case actions.STORE_EDITABLE_RECIPE:
         let newState = { ...state };
         newState.storedRecipe = action.payload;
         newState.id = action.payload.recipe.Id;
         return newState;
      default:
         return state;
   }
}
