import React from "react";
import { Link } from "react-router-dom";
import recipeCard from "../../mock data/recipe-card";
import recipeDirection from "../../mock data/recipe-direction";
const oneCard = recipeCard[3];

export default function RecipeCard() {
   console.log(recipeCard);
   return (
      <div>
         <div className="card mb-3 offset-1 col-10 col-xl-10 offset-1">
            <div className="card-body ">
               <div className="card-header text-center mb-3">
                  {oneCard.recipeTitle}
               </div>
               <div className="row mb-3">
                  <h6 className="card-subtitle mb-2 text-muted  col-12 col-xl-4">
                     Prep-Time:{oneCard.prepTime}
                  </h6>

                  <h6 className="card-subtitle mb-2 text-muted  col-12 col-xl-4">
                     Cook-Time:{oneCard.cookTime}
                  </h6>
                  <h6 className="card-subtitle mb-2 text-muted  col-12 col-xl-4">
                     Serving Size:{oneCard.servingSize}
                  </h6>
               </div>
               <h6 className="card-subtitle text-muted">Ingredients</h6>
               <p className="card-text"></p>
               <ul>
                  <li>2 slices whole wheat bread</li>
                  <li>3 slices smoked turkey breast</li>
                  <li>2 slices Colby-Monterey</li>
                  <li>4 slices avocado</li>
                  <li>2 leafs iceberg leetuce</li>
               </ul>

               <button className=" mb-2 btn btn-md btn-primary col-12  col-xl-6 offset-xl-3">
                  Cook this Meal
               </button>
               <button className=" mb-2 btn btn-md btn-primary col-12 col-xl-6 offset-xl-3 ">
                  Changed My Mind
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
