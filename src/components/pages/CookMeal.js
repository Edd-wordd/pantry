import React from "react";
import { Link } from "react-router-dom";
import recipes from "../../mock data/recipes";
import RecipeAmount from "../../components/ui/RecipeAmount";
import Navigation from "../ui/Navigation";
import AppTemplate from "../ui/AppTemplate";

const oneCard = recipes[0];

export default function CookMeal() {
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
                  <RecipeAmount />

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
