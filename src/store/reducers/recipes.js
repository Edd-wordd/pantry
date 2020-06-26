import actions from "../actions";

export default function recipes(state = [], action) {
   let newState = [...state];

   switch (action.type) {
      case actions.STORE_RECIPES:
         newState.recipes = action.payload;
         return newState;
      default:
         return state;
   }
}
