import actions from "../actions";

export default function allRecipes(state = [], action) {
   switch (action.type) {
      case actions.STORE_ALL_RECIPES:
         return action.payload;
      default:
         return state;
   }
}
