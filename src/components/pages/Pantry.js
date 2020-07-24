import React from "react";
import Navigation from "../ui/Navigation";
import AppTemplate from "../ui/AppTemplate";
import axios from "axios";
import { connect } from "react-redux";
import actions from "../../store/actions";
import pantryImg from "../../img/jake-charles-zoymUrsMg0g-unsplash.jpg";
import { ingredients } from "../../flattened/ingredients";

class Pantry extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         // isInStock: true,
         outOfStock: [],
      };
      axios
         .get(
            "https://raw.githubusercontent.com/Edd-wordd/pantry/master/src/mock%20data/recipes.JSON"
         )
         .then((response) => {
            // handle success
            console.log("data", response);

            props.dispatch({
               type: actions.STORE_ALL_RECIPES,
               payload: response.data,
            });
            // may have to flatten into single array
            // map through ingredients again
            const ingredients = response.data.map((recipe) => {
               return recipe.ingredients.map((ingredient) => ingredient);
            });
            // console.log(ingredients);
            // props.dispatch({
            //    type: actions.STORE_INGREDIENTS,
            //    // get ingredients with this payload
            //    payload: ingredients,
            // });
         })
         .catch((error) => {
            // handle error
            console.log(error);
         });
   }

   checkIsInStock(id) {
      this.props.dispatch({
         type: actions.STORE_OUT_OF_STOCK_INGREDIENT,
         payload: id,
      });

      console.log({ id });
      // console.log("pantry", this.props.pantry);
      // console.log("toggled");
   }
   toggleIsInStock(id) {
      const modifiedPantry = this.props.pantry.map((ingredient) => {
         const newIngredient = { ...ingredient };
         if (id === ingredient.id) {
            newIngredient.isInStock = !ingredient.isInStock;
         }
         return newIngredient;
      });
      this.props.dispatch({
         type: actions.STORE_INGREDIENTS,
         payload: modifiedPantry,
      });
      console.log(modifiedPantry);
   }

   render() {
      return (
         <>
            <Navigation />
            <AppTemplate>
               <div className=" mb-3 col-xl-5 offset-xl-1">
                  <fieldset>
                     <legend>
                        <h5 className="card-title text-left">
                           Pantry Inventory
                        </h5>
                     </legend>
                     {this.props.pantry.map((ingredient) => {
                        // return recipe.ingredients.map((ingredient) => {
                        return (
                           <>
                              <ul className="list-group list-group-flush">
                                 <div className="custom-control custom-switch ">
                                    <div className="row">
                                       <input
                                          type="checkbox"
                                          className="custom-control-input col-1"
                                          id={ingredient.ingredient}
                                          checked={ingredient.isInStock}
                                          onClick={() => {
                                             this.toggleIsInStock(
                                                ingredient.id
                                             );
                                          }}
                                          // }
                                       />
                                       <label
                                          className="custom-control-label"
                                          htmlFor={ingredient.ingredient}
                                       >
                                          In-Stock
                                       </label>

                                       <li className=" col-5">
                                          {ingredient.ingredient}
                                       </li>
                                    </div>
                                    <hr />
                                 </div>
                              </ul>
                           </>
                        );
                        // });
                     })}
                  </fieldset>
               </div>
               <div className="col-xl-6">
                  <img src={pantryImg} alt="" className="pantryImage"></img>
               </div>
            </AppTemplate>
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
export default connect(mapStateToProps)(Pantry);
