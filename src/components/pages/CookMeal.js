import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../ui/Navigation";
import AppTemplate from "../ui/AppTemplate";
import { connect } from "react-redux";
import axios from "axios";

class CookMeal extends React.Component {
   constructor(props) {
      super(props);
      axios
         .get(
            "https://raw.githubusercontent.com/Edd-wordd/pantry/master/src/mock%20data/recipes.JSON"
         )
         .then((response) => {
            // handle success
            console.log("allRecipes", response);
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
            <AppTemplate>
               <div className="mb-3 offset-1 col-10 col-xl-4 card-border">
                  <div className="card-body ">
                     <div className="mb-3 text-danger">
                        <h3>
                           {this.props.editableRecipe.editableRecipe.title}
                        </h3>
                     </div>
                     <div className="row mb-3">
                        <h6 className="card-subtitle mb-2 text-muted  col-12 ">
                           Prep-Cook-Time:{" "}
                           {this.props.editableRecipe.editableRecipe.cookTime}
                        </h6>

                        <h6 className="card-subtitle mb-2 text-muted  col-12 ">
                           Serving Size:
                           {
                              this.props.editableRecipe.editableRecipe
                                 .servingSize
                           }
                        </h6>
                     </div>
                     <h6 className="card-subtitle text-muted">Ingredients</h6>

                     {this.props.editableRecipe.editableRecipe.ingredients.map(
                        (ingredient) => {
                           return (
                              <ul key={ingredient.id}>
                                 <li
                                    ingredient={ingredient.ingredient}
                                    amount={ingredient.amount}
                                    key={ingredient.id}
                                 >
                                    {ingredient.amount}- {ingredient.ingredient}
                                 </li>
                              </ul>
                           );
                        }
                     )}

                     <h6 className="card-subtitle text-muted py-2">
                        Directions:
                     </h6>

                     <p>
                        {this.props.editableRecipe.editableRecipe.directions}
                     </p>

                     <div>
                        <Link
                           to="/pantry"
                           className="card-link btn btn-primary col-10 offset-1 col-xl-12 "
                        >
                           Check Pantry
                        </Link>
                        {/* <Link to="" className="card-link ">
                              Add to Favorites
                           </Link> */}
                        <Link
                           to="/Home"
                           className="card-link btn btn-primary  col-10 offset-1 mt-2 col-xl-12"
                        >
                           Back To Recipes
                        </Link>
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
      editableRecipe: state.editableRecipe,
   };
}
export default connect(mapStateToProps)(CookMeal);
