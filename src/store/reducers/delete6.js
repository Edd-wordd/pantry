import actions from "../actions";

export default function ingredients(state = [], action) {
   switch (action.type) {
      case actions.STORE_INGREDIENTS:
         return [];
      default:
         return state;
   }
}
