import React from "react";
import Navigation from "../ui/Navigation";
import RecipeCard from "../ui/RecipeCard";
import recipes from "../../mock data/recipes";

export default function Home() {
   return (
      <div>
         <Navigation />
         <div className=" landing-signIn">
            <h4 className="text-center">Impressive collection of Meals</h4>

            {recipes.map((recipe, index) => {
               return (
                  <div key={index}>
                     <RecipeCard
                        recipeName={recipe.title}
                        recipeCookTime={recipe.cookTime}
                        recipeServing={recipe.servingSize}
                        key={recipe.id}
                     />
                  </div>
               );
            })}
         </div>
      </div>
   );
}
