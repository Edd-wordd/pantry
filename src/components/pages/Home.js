import React from "react";
import Navigation from "../ui/Navigation";
import RecipeCard from "../ui/RecipeCard";
import axios from "axios";
import { connect } from "react-redux";
import actions from "../../store/actions";

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
   }

   render() {
      return (
         <>
            <Navigation />
            <div className=" landing-signIn">
               <h4 className="text-center mb-4">
                  Impressive collection of Meals
               </h4>
               {this.props.allRecipes.map((recipe) => {
                  return (
                     <RecipeCard
                        recipeName={recipe.title}
                        recipeCookTime={recipe.cookTime}
                        recipeServing={recipe.servingSize}
                        key={recipe.id}
                        id={recipe.id}
                        recipe={recipe}
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
   };
}
export default connect(mapStateToProps)(Home);
