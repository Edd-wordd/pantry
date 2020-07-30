import React from "react";
import heart from "../../icons/heart.svg";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import actions from "../../store/actions";
import person from "../../icons/person.svg";

class RecipeCard extends React.Component {
   // constructor(props) {
   //    super(props);
   // }

   storeEditableRecipe(recipe) {
      this.props.dispatch({
         type: actions.STORE_EDITABLE_RECIPE,
         payload: recipe,
      });
   }
   render() {
      return (
         <div className="row float-right">
            <div className="mb-3 offset-1 col-10 card-border ">
               <div className="card-body py-5 home-cards">
                  <h5 className="mb-3">{this.props.recipeName}</h5>
                  <div className="row mb-3">
                     <h6 className="card-subtitle mb-2 text-muted  col-12 ">
                        Prep-Cook-Time:&nbsp;{this.props.recipeCookTime}
                     </h6>

                     <h6 className="card-subtitle mb-2 text-muted  col-12 ">
                        <img
                           src={person}
                           alt="serving icon"
                           className="mr-1 "
                        />
                        Serving Size:&nbsp;{this.props.recipeServing}
                     </h6>
                  </div>
                  {/* TODO ADD LOGIC TO MAKE FAVORITES APPEAR IF TRUE
                  AND NOT APPEAR IF FALSE */}
                  {this.props.favorites === true && (
                     <img src={heart} alt="favorites" />
                  )}
                  <Link
                     to="/CookMeal"
                     className=" mb-3 btn btn-outline-secondary float-right"
                     onClick={() => {
                        this.storeEditableRecipe(this.props.recipe);
                     }}
                  >
                     View Recipe
                  </Link>
               </div>
               <hr />
            </div>
         </div>
      );
   }
}
function mapStateToProps(state) {
   return {
      allRecipes: state.allRecipes,
   };
}
export default connect(mapStateToProps)(RecipeCard);
