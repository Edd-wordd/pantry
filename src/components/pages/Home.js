import React from "react";
import Navigation from "../ui/Navigation";
import RecipeCard from "../ui/RecipeCard";
import axios from "axios";
import { connect } from "react-redux";
import actions from "../../store/actions";
import { Link } from "react-router-dom";

class Home extends React.Component {
   constructor(props) {
      super(props);
      axios
         .get("https://run.mocky.io/v3/ddbdb68f-c4a8-4c1b-8c04-2cf963ec7cdd")
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

   storeEditableRecipe(recipe) {
      console.log("storing clicked recipe");
      //need to get the recipe id and or index to display on cookmeal
      recipe = this.props.allRecipes[3].id;
      console.log("reciped id in store", recipe);
      this.props.dispatch({
         type: actions.STORE_EDITABLE_RECIPE,
         payload: { recipe }, //needs to match the recipe and the previous page it came from
      });
   }

   render() {
      const recipeId = this.props.allRecipes;
      console.log("recipeId", recipeId);

      return (
         <>
            <Navigation />
            <div className=" landing-signIn">
               <h4 className="text-center">Impressive collection of Meals</h4>
               {this.props.allRecipes.map((recipe) => {
                  return (
                     <>
                        <RecipeCard
                           recipeName={recipe.title}
                           recipeCookTime={recipe.cookTime}
                           recipeServing={recipe.servingSize}
                           key={recipe.id}
                        />
                        <div className="row float-right">
                           <div className="mb-3 offset-1 col-10 col-xl-12 offset-xl-0card-border ">
                              <div className="card-body py-5">
                                 <Link
                                    to="/CookMeal"
                                    className=" mb-3 btn btn-outline-primary float-right"
                                    onClick={() => {
                                       this.storeEditableRecipe(recipe);
                                    }}
                                 >
                                    Cook Meal
                                 </Link>
                              </div>
                           </div>
                        </div>
                     </>
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
      editableRecipe: state.editableRecipe,
   };
}
export default connect(mapStateToProps)(Home);
