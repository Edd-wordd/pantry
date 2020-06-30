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
         .get("https://run.mocky.io/v3/b78a0948-289b-4991-886c-4b331b1b7e30")
         .then((response) => {
            // handle success
            console.log(response);
            const recipes = response.data;
            console.log("here", recipes);
            props.dispatch({
               type: actions.STORE_RECIPES,
               payload: response.data,
            });
         })
         .catch((error) => {
            // handle error
            console.log(error);
         });
   }

   cookMealRecipe() {
      console.log("storing editable card");
      const recipeIndex = this.props.recipes[this.props.indexOfCurrentRecipe];
      console.log("indexed", recipeIndex);
      this.props.dispatch({
         type: actions.STORE_COOKED_RECIPE,
         payload: {
            recipeCard: recipeIndex,
            preCard: "/home",
         },
      });
   }

   render() {
      const recipeIndex = this.props.recipes[this.props.indexOfCurrentRecipe];
      console.log("heres the one index recipe", recipeIndex);

      return (
         <>
            <Navigation />
            <div className=" landing-signIn">
               <h4 className="text-center">Impressive collection of Meals</h4>
               {this.props.recipes.map((recipe) => {
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
                                       this.cookMealRecipe();
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
      recipes: state.recipes,
      indexOfCurrentRecipe: state.indexOfCurrentRecipe,
   };
}
export default connect(mapStateToProps)(Home);
