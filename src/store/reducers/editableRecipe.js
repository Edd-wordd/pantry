import actions from "../actions";

export default function editableRecipe(state = {}, action) {
   switch (action.type) {
      case actions.STORE_EDITABLE_RECIPE:
         let newState = { ...state };
         newState.storedRecipe = action.payload.storedRecipe;
         newState.prevRoute = action.payload.prevRoute;

         return newState;
      default:
         return state;
   }
}
