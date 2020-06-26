import actions from "../actions";

export default function indexOfCurrentRecipe(state = 0, action) {
   switch (action.type) {
      case actions.UPDATE_INDEX_OF_CURRENT_RECIPE:
         return {};
      default:
         return state;
   }
}
