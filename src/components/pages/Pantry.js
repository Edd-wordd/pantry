import React from "react";
import Navigation from "../ui/Navigation";
import AppTemplate from "../ui/AppTemplate";
import AddPantryIngredient from "../ui/AddPantryIngredient";
import ingredients from "../../mock data/ingredients";
import axios from "axios";

export default function Pantry() {
   axios
      .get(
         "https://github.com/Edd-wordd/pantry/blob/master/src/mock%20data/ingredients.js"
      )
      .then(function (response) {
         // handle success
         console.log(response);
      })
      .catch(function (error) {
         // handle error
         console.log(error);
      })
      .finally(function () {
         // always executed
      });
   return (
      <div>
         <Navigation />
         <AppTemplate>
            <div className=" mb-3 offset-1 col-10 col-xl-5">
               <div className="card-body ">
                  {/* <h5 className="card-title ">Pantry Inventory</h5> */}
               </div>
               <fieldset>
                  <legend>
                     <h5 className="card-title ">Pantry Inventory</h5>
                  </legend>

                  {ingredients.map((ingredient) => {
                     return (
                        <AddPantryIngredient
                           ingredientAmount={ingredient.ingredientAmount}
                           ingredients={ingredient.ingredient}
                           inStock={ingredient.isInStock}
                           key={ingredient.id}
                        />
                     );
                  })}
               </fieldset>
            </div>
         </AppTemplate>
      </div>
   );
}
