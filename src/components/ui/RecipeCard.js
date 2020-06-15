import React from "react";
import { Link } from "react-router-dom";
import recipeCard from "../../mock data/recipe-card";
import RecipeAmount from "./RecipeAmount";

const oneCard = recipeCard[2];

export default function RecipeCard() {
   console.log(recipeCard);
   return (
      <div className="row">
         <div className="mb-3 offset-1 col-10 col-xl-3 card-border">
            <div className="card-body ">
               <div className="mb-3">{oneCard.recipeTitle}</div>
               <div className="row mb-3">
                  <h6 className="card-subtitle mb-2 text-muted  col-12 ">
                     Prep/Cook-Time:{oneCard.cookTime}
                  </h6>

                  <h6 className="card-subtitle mb-2 text-muted  col-12 ">
                     Serving Size:{oneCard.servingSize}
                  </h6>
               </div>
               <h6 className="card-subtitle text-muted">Ingredients</h6>
               <RecipeAmount />

               <Link to="/CookMeal" className=" mb-2 btn btn-md btn-primary">
                  Cook this Meal
               </Link>

               <div className="d-none">
                  <textarea>{oneCard.directions}</textarea>

                  <div className="float-right">
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
      </div>
   );
}
