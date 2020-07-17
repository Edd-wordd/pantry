import actions from "../actions";

export default function pantry(state = {}, action) {
   switch (action.type) {
      case actions.STORE_OUT_OF_STOCK_INGREDIENT:
         return action.payload;
      default:
         return state;
   }
}
