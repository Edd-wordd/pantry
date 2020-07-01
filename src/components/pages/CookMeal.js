import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../ui/Navigation";
import AppTemplate from "../ui/AppTemplate";
import { connect } from "react-redux";

class CookMeal extends React.Component {
   constructor(props) {
      super(props);
   }

   render() {
      return (
         <>
            <Navigation />
            <AppTemplate>
               <div className="mb-3 offset-1 col-10 col-xl-4 card-border">
                  <div className="card-body ">
                     <div className="mb-3 text-danger">
                        {/* {this.props.avaliableRecipes.title} */}
                     </div>
                     <div className="row mb-3">
                        <h6 className="card-subtitle mb-2 text-muted  col-12 ">
                           Prep-Cook-Time:{" "}
                           {/* {this.props.avaliableRecipes.cookTime} */}
                        </h6>

                        <h6 className="card-subtitle mb-2 text-muted  col-12 ">
                           Serving Size:
                           {/* {this.props.avaliableRecipes.servingSize} */}
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
                           {/* {this.props.avaliableRecipes.directions} */}
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
      allRecipes: state.allRecipes,
   };
}
export default connect(mapStateToProps)(CookMeal);
