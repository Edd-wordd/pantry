import React from "react";
import Navigation from "../ui/Navigation";
import RecipeCard from "../ui/RecipeCard";
import axios from "axios";
import orderBy from "lodash/orderBy";

export default class Home extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         displayedRecipes: [],
      };
   }

   componentDidMount() {
      axios
         .get("https://run.mocky.io/v3/bba96bf0-ddc2-422b-bff7-1d2fd240a16e")
         .then((response) => {
            // handle success
            console.log(response);
            const recipes = response.data;
            console.log("here", recipes);
            this.setState({
               displayedRecipes: orderBy(recipes, ["id"]),
            });
         })
         .catch((error) => {
            // handle error
            console.log(error);
         });
   }

   render() {
      return (
         <>
            <Navigation />
            <div className=" landing-signIn">
               <h4 className="text-center">Impressive collection of Meals</h4>
               {this.state.displayedRecipes.map((recipes) => {
                  return (
                     <RecipeCard
                        recipeName={recipes.title}
                        recipeCookTime={recipes.cookTime}
                        recipeServing={recipes.servingSize}
                        key={recipes.id}
                     />
                  );
               })}
            </div>
         </>
      );
   }
}
