import React from "react";
import { Link } from "react-router-dom";
import recipeCard from "../../mock data/recipe-card";
import recipeDirection from "../../mock data/recipe-direction";
const oneCard = recipeCard[3];

export default function RecipeCard() {
   console.log(recipeCard);
   return (
      <div>
         <div className="mb-3 offset-1 col-10 col-xl-3 ">
            <div className="card-body ">
               <div className="mb-3">{oneCard.recipeTitle}</div>
               <div className="row mb-3">
                  <h6 className="card-subtitle mb-2 text-muted  col-12 ">
                     Prep/Cook-Time:{oneCard.prepTime}
                  </h6>

                  <h6 className="card-subtitle mb-2 text-muted  col-12 ">
                     Serving Size:{oneCard.servingSize}
                  </h6>
               </div>
               <h6 className="card-subtitle text-muted">Ingredients</h6>
               <p className="card-text"></p>
               <ul>
                  <li>whole wheat bread</li>
                  <li>smoked turkey breast</li>
                  <li>Colby-Monterey</li>
                  <li>avocado</li>
                  <li>iceberg lettuce</li>
               </ul>

               <button className=" mb-2 btn btn-md btn-primary">
                  Cook this Meal
               </button>

               <div className="d-none">
                  <ol>
                     <li>{recipeDirection.steps1}</li>
                     <li>{recipeDirection.steps2}</li>
                     <li>{recipeDirection.steps3}</li>
                     <li>{recipeDirection.steps4}</li>
                     <li>{recipeDirection.steps4}</li>
                     <li>{recipeDirection.steps4}</li>
                     <li>{recipeDirection.steps4}</li>
                     <li>{recipeDirection.steps4}</li>
                  </ol>
                  <h5>Notes:</h5>
                  <p>{oneCard.noteSection}</p>
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
         </div>
      </div>
   );
}
