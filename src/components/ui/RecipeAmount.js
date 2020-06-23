import React from "react";

export default function Ingredient(props) {
   return (
      <div>
         <ul>
            <li>
               {props.ingredientAmount}-{props.ingredient}
            </li>
         </ul>
      </div>
   );
}
