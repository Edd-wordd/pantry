import React from "react";
import { Link } from "react-router-dom";
import recipeCard from "../../mock data/recipe-card";
import heart from "../../icons/heart.svg";

const oneCard = recipeCard[2];

export default function RecipeCard() {
   console.log(recipeCard);
   return (
      <div className="row float-right">
         <div className="mb-3 offset-1 col-10 col-xl-9 offset-xl-1 card-border ">
            <div className="card-body py-5">
               <h5 className="mb-3">{oneCard.recipeTitle}</h5>
               <div className="row mb-3">
                  <h6 className="card-subtitle mb-2 text-muted  col-12 ">
                     Prep-Cook-Time:{oneCard.cookTime}
                  </h6>

                  <h6 className="card-subtitle mb-2 text-muted  col-12 ">
                     Serving Size:{oneCard.servingSize}
                  </h6>
               </div>
               <img src={heart} alt="favorites" />
               <Link
                  to="/CookMeal"
                  className=" mb-3 btn btn-outline-primary float-right"
               >
                  Cook Meal
               </Link>
            </div>
            <hr />
         </div>
      </div>
   );
}
