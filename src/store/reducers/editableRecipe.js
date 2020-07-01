import actions from "../actions";

export default function editableRecipe(state = {}, action) {
   switch (action.type) {
      case actions.STORE_EDITABLE_RECIPE:
         let newState = { ...state };
         newState.storedRecipe = action.payload;

         return newState;
      default:
         return state;
   }
}
