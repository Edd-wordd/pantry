import actions from "../actions";

export default function outOfStock(state = [], action) {
   switch (action.type) {
      case actions.STORE_OUT_OF_STOCK_INGREDIENT:
         return [...state, action.payload];
      default:
         return state;
   }
}
