import actions from "../actions";

export default function pantry(state = [], action) {
   switch (action.type) {
      case actions.STORE_INGREDIENTS:
         return action.payload;
      default:
         return state;
   }
}
