import actions from "../actions";

export default function recipes(state = [], action) {
   switch (action.type) {
      case actions.STORE_RECIPES:
         // const newState = [...state];
         return action.payload;
      default:
         return state;
   }
}
