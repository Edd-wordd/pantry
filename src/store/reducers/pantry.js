import actions from "../actions";

export default function pantry(state = [], action) {
   console.log("hello", state);
   switch (action.type) {
      case actions.STORE_INGREDIENTS:
         return action.payload;
      // another case to toggle in stock
      // send new pantry
      case actions.TOGGLE_INSTOCK_INGREDIENT:
         return {
            ...state.map((ingredient) => {
               if (action.payload === ingredient.id) {
                  ingredient.isInStock = !ingredient.isInStock;
               }
            }),
         };

      default:
         return state;
   }
}
