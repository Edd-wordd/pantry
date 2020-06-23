import React from "react";
import Navigation from "../ui/Navigation";
import RecipeCard from "../ui/RecipeCard";
import recipes from "../../mock data/recipes";
import axios from "axios";

export default function Home() {
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
      <div>
         <Navigation />
         <div className=" landing-signIn">
            <h4 className="text-center">Impressive collection of Meals</h4>

            {recipes.map((recipe) => {
               return (
                  <RecipeCard
                     recipeName={recipe.title}
                     recipeCookTime={recipe.cookTime}
                     recipeServing={recipe.servingSize}
                     key={recipe.id}
                  />
               );
            })}
         </div>
      </div>
   );
}
