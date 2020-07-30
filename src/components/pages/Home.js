import React from "react";
import Navigation from "../ui/Navigation";
import RecipeCard from "../ui/RecipeCard";
import axios from "axios";
import { connect } from "react-redux";
import actions from "../../store/actions";
import { ingredients } from "../../flattened/ingredients";

class Home extends React.Component {
   constructor(props) {
      super(props);
      axios

         .get(
            "https://raw.githubusercontent.com/Edd-wordd/pantry/master/src/mock%20data/recipes.JSON"
         )
         .then((response) => {
            // handle success
            console.log("allRecipes", response);
            props.dispatch({
               type: actions.STORE_ALL_RECIPES,
               payload: response.data,
            });
         })
         .catch((error) => {
            // handle error
            console.log(error);
         });

      console.log("test", ingredients);
      console.log(this.props.pantry.length);
      if (this.props.pantry.length === 0) {
         props.dispatch({
            type: actions.STORE_INGREDIENTS,
            payload: ingredients,
         });
      }
   }

   render() {
      const displayedRecipes = this.props.allRecipes.filter((recipe) => {
         for (let r in recipe.ingredients) {
            for (let p in this.props.pantry) {
               if (recipe.ingredients[r].id === this.props.pantry[p].id) {
                  if (!this.props.pantry[p].isInStock) {
                     return false;
                  }
               }
            }
         }
         return true;
      });

      return (
         <>
            <Navigation />
            <div className="landing-signIn">
               <h4 className="text-center mb-4">
                  Impressive collection of Recipes
               </h4>

               {displayedRecipes.map((recipe) => {
                  return (
                     <RecipeCard
                        recipeName={recipe.title}
                        recipeCookTime={recipe.cookTime}
                        recipeServing={recipe.servingSize}
                        key={recipe.id}
                        id={recipe.id}
                        recipe={recipe}
                        favorites={recipe.favorites}
                     />
                  );
               })}
            </div>
         </>
      );
   }
}

function mapStateToProps(state) {
   return {
      allRecipes: state.allRecipes,
      pantry: state.pantry,
   };
}
export default connect(mapStateToProps)(Home);
