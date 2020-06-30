import actions from "../actions";

export default function indexOfCurrentRecipe(state = 0, action) {
   switch (action.type) {
      case actions.UPDATE_INDEX_OF_CURRENT_RECIPE:
         const newState = [...state];
         newState.index += 1;

         return newState;
      default:
         return state;
   }
}
