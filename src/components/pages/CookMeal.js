import React from "react";
import { Link } from "react-router-dom";
import recipes from "../../mock data/recipe-card";
import Ingredient from "../../components/ui/RecipeAmount";
import Navigation from "../ui/Navigation";
import AppTemplate from "../ui/AppTemplate";
import ingredients from "../../mock data/ingredients";
import axios from "axios";
import { connect } from "react-redux";
import actions from "../../store/actions";

const oneCard = recipes[0];

class CookMeal extends React.Component {
   constructor(props) {
      super(props);
      axios
         .get(
            "https://run.mocky.ibba96bf0o/v3/bba96bf0-ddc2-422b-bff7-1d2fd240a16e"
         )
         .then(function (response) {
            // handle success
            console.log(response);
            props.dispatch({
               type: actions.STORE_RECIPE,
               payload: response.data,
            });
         })
         .catch(function (error) {
            // handle error
            console.log(error);
         });
   }
   render() {
      return (
         <>
            <Navigation />
            <AppTemplate>
               <div className="mb-3 offset-1 col-10 col-xl-4 card-border">
                  <div className="card-body ">
                     <div className="mb-3 text-danger">{oneCard.title}</div>
                     <div className="row mb-3">
                        <h6 className="card-subtitle mb-2 text-muted  col-12 ">
                           Prep-Cook-Time: {oneCard.cookTime}
                        </h6>

                        <h6 className="card-subtitle mb-2 text-muted  col-12 ">
                           Serving Size:{oneCard.servingSize}
                        </h6>
                     </div>
                     <h6 className="card-subtitle text-muted">Ingredients</h6>

                     {ingredients.map((ingredient) => {
                        return (
                           <Ingredient
                              ingredientAmount={ingredient.amount}
                              ingredient={ingredient.ingredient}
                              key={ingredient.id}
                           />
                        );
                     })}

                     <div className="">
                        <p>
                           Directions:&nbsp;&nbsp;&nbsp;
                           {oneCard.directions}
                        </p>

                        <div className="">
                           <Link to="/pantry" className="card-link ">
                              Check Pantry
                           </Link>
                           <Link to="" className="card-link ">
                              Add to Favorites
                           </Link>
                        </div>
                     </div>
                  </div>

                  <hr />
               </div>
            </AppTemplate>
         </>
      );
   }
}
function mapStateToProps(state) {
   return {
      recipes: state.recipe,
      indexOfCurrentRecipe: state.indexOfCurrentRecipe,
   };
}
export default connect(mapStateToProps)(CookMeal);
