import React from "react";
import heart from "../../icons/heart.svg";

export default function RecipeCard(props) {
   return (
      <div className="row float-right">
         <div className="mb-3 offset-1 col-10 col-xl-9 offset-xl-1 card-border ">
            <div className="card-body py-5">
               <h5 className="mb-3">{props.recipeName}</h5>
               <div className="row mb-3">
                  <h6 className="card-subtitle mb-2 text-muted  col-12 ">
                     Prep-Cook-Time:&nbsp;{props.recipeCookTime}
                  </h6>

                  <h6 className="card-subtitle mb-2 text-muted  col-12 ">
                     Serving Size:&nbsp;{props.recipeServing}
                  </h6>
               </div>
               <img src={heart} alt="favorites" />
               {/* <Link
                  to="/CookMeal"
                  className=" mb-3 btn btn-outline-primary float-right"
                  onClick={() => {
                     this.cookMealRecipe();
                  }}
               >
                  Cook Meal
               </Link> */}
            </div>
            <hr />
         </div>
      </div>
   );
}
