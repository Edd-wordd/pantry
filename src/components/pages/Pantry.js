import React from "react";
import Navigation from "../ui/Navigation";
import AppTemplate from "../ui/AppTemplate";
import AddPantryIngredient from "../ui/AddPantryIngredient";
import ingredients from "../../mock data/ingredients";

export default function Pantry() {
   return (
      <div>
         <Navigation />
         <AppTemplate>
            <div className=" mb-3 offset-1 col-10 col-xl-5">
               <div className="card-body ">
                  <h5 className="card-title ">Pantry Inventory</h5>
               </div>
               {ingredients.map((ingredient) => {
                  return (
                     <AddPantryIngredient
                        ingredientAmount={ingredient.ingredientAmount}
                        ingredients={ingredient.ingredient}
                        inStock={ingredient.isInStock}
                     />
                  );
               })}
            </div>
         </AppTemplate>
      </div>
   );
}
