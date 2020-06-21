import React from "react";
import Navigation from "../ui/Navigation";
import RecipeCard from "../ui/RecipeCard";
import recipeCard from "../../mock data/recipe-card";

export default function Home() {
   return (
      <div>
         <Navigation />
         <div className=" landing-signIn">
            <h4 className="text-center">Impressive collection of Meals</h4>

            {recipeCard.map((recipe) => {
               return (
                  <RecipeCard
                     recipeName={recipe.recipeTitle}
                     recipeCookTime={recipe.cookTime}
                     recipeServing={recipe.servingSize}
                  />
               );
            })}
         </div>
      </div>
   );
}
