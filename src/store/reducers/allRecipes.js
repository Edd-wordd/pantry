import actions from "../actions";

export default function allRecipes(state = [], action) {
   switch (action.type) {
      case actions.STORE_ALL_RECIPES:
         let newState = [...state];
         newState = action.payload;
         return newState;
      default:
         return state;
   }
}
