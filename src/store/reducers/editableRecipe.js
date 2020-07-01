import actions from "../actions";

export default function editableRecipe(state = {}, action) {
   switch (action.type) {
      case actions.STORE_EDITABLE_RECIPE:
         return { ...state, editableRecipe: action.payload };
      default:
         return state;
   }
}
