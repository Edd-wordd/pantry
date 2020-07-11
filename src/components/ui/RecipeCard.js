import React from "react";
import heart from "../../icons/heart.svg";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import actions from "../../store/actions";

class RecipeCard extends React.Component {
   constructor(props) {
      super(props);
   }

   storeEditableRecipe(recipe) {
      this.props.dispatch({
         type: actions.STORE_EDITABLE_RECIPE,
         payload: recipe,
      });
   }
   render() {
      return (
         <div className="row lg-float-right">
            <div className="mb-3 offset-1 col-10 card-border ">
               <div className="card-body py-5">
                  <h5 className="mb-3">{this.props.recipeName}</h5>
                  <div className="row mb-3">
                     <h6 className="card-subtitle mb-2 text-muted  col-12 ">
                        Prep-Cook-Time:&nbsp;{this.props.recipeCookTime}
                     </h6>

                     <h6 className="card-subtitle mb-2 text-muted  col-12 ">
                        Serving Size:&nbsp;{this.props.recipeServing}
                     </h6>
                  </div>
                  {/* TODO ADD LOGIC TO MAKE FAVORITES APPEAR IF TRUE
                  AND NOT APPEAR IF FALSE */}
                  <img src={heart} alt="favorites" />
                  <Link
                     to="/CookMeal"
                     className=" mb-3 btn btn-outline-primary float-right"
                     onClick={() => {
                        this.storeEditableRecipe(this.props.recipe);
                     }}
                  >
                     Cook Meal
                  </Link>
               </div>
               <hr />
            </div>
         </div>
      );
   }
}
function mapStateToProps(state) {
   return {};
}
export default connect(mapStateToProps)(RecipeCard);
