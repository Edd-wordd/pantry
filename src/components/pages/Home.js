import React from "react";
import Navigation from "../ui/Navigation";
import RecipeCard from "../ui/RecipeCard";

export default function Home() {
   return (
      <div>
         <Navigation />
         <div className="container landing-signIn">
            <h2 className="text-center">Impressive collection of Meals</h2>
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
         </div>
      </div>
   );
}
