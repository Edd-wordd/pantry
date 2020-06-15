import React from "react";
import recipeAmounts from "../../mock data/recipe-amount";
const amount = recipeAmounts[0];

export default function RecipeAmount() {
   return (
      <div>
         <ul>
            <li>
               {amount.amounts}-{amount.ingredient}
            </li>
            <li>
               {amount.amounts1}-{amount.ingredient1}
            </li>
            <li>
               {amount.amounts2}-{amount.ingredient2}
            </li>
            <li>
               {amount.amounts3}-{amount.ingredient3}
            </li>
         </ul>
      </div>
   );
}
