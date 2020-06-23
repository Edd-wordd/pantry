import React from "react";
import { Link } from "react-router-dom";
import recipes from "../../mock data/recipes";
import Ingredient from "../../components/ui/RecipeAmount";
import Navigation from "../ui/Navigation";
import AppTemplate from "../ui/AppTemplate";
import ingredients from "../../mock data/ingredients";
import axios from "axios";

const oneCard = recipes[0];

export default function CookMeal() {
   axios
      .get(
         "https://github.com/Edd-wordd/pantry/blob/master/src/mock%20data/recipes.js"
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
      <>
         <Navigation />
         <AppTemplate>
            <div className="mb-3 offset-1 col-10 col-xl-4 card-border">
               <div className="card-body ">
                  <div className="mb-3 text-danger">{oneCard.title}</div>
                  <div className="row mb-3">
                     <h6 className="card-subtitle mb-2 text-muted  col-12 ">
                        Prep-Cook-Time: {oneCard.cookTime}
                     </h6>

                     <h6 className="card-subtitle mb-2 text-muted  col-12 ">
                        Serving Size:{oneCard.servingSize}
                     </h6>
                  </div>
                  <h6 className="card-subtitle text-muted">Ingredients</h6>

                  {ingredients.map((ingredient) => {
                     return (
                        <Ingredient
                           ingredientAmount={ingredient.amount}
                           ingredient={ingredient.ingredient}
                           key={ingredient.id}
                        />
                     );
                  })}

                  <div className="">
                     <p>
                        Directions:&nbsp;&nbsp;&nbsp;
                        {oneCard.directions}
                     </p>

                     <div className="">
                        <Link to="/pantry" className="card-link ">
                           Check Pantry
                        </Link>
                        <Link to="" className="card-link ">
                           Add to Favorites
                        </Link>
                     </div>
                  </div>
               </div>

               <hr />
            </div>
         </AppTemplate>
      </>
   );
}
