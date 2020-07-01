import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../ui/Navigation";
import AppTemplate from "../ui/AppTemplate";
import { connect } from "react-redux";
import axios from "axios";
// import actions from "../../store/actions";
// import editableRecipe from "../../store/reducers/editableRecipe";

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
      const editableRecipe2 = this.props.editableRecipe;
      console.log("one", editableRecipe2);
      return (
         <>
            <Navigation />
            <AppTemplate>
               <div className="mb-3 offset-1 col-10 col-xl-4 card-border">
                  <div className="card-body ">
                     <div className="mb-3 text-danger">
                        {this.props.editableRecipe.editableRecipe.title}
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

                     {/* {ingredients.map((ingredient) => {
                        return (
                           <Ingredient
                              ingredientAmount={ingredient.amount}
                              ingredient={ingredient.ingredient}
                              key={ingredient.id}
                           />
                        );
                     })} */}

                     <div className="">
                        <p>
                           Directions:&nbsp;&nbsp;&nbsp;
                           {this.props.editableRecipe.editableRecipe.directions}
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
      editableRecipe: state.editableRecipe,
   };
}
export default connect(mapStateToProps)(CookMeal);
