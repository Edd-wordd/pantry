import React from "react";
import Navigation from "../ui/Navigation";
import AppTemplate from "../ui/AppTemplate";
import axios from "axios";
import { connect } from "react-redux";
import actions from "../../store/actions";
import pantryImg from "../../img/jake-charles-zoymUrsMg0g-unsplash.jpg";

class Pantry extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         isInStock: true,
         idstest: [],
      };
      axios
         .get(
            "https://raw.githubusercontent.com/Edd-wordd/pantry/master/src/mock%20data/recipes.JSON"
         )
         .then(function (response) {
            // handle success
            console.log("data", response);
            props.dispatch({
               type: actions.STORE_ALL_RECIPES,
               payload: response.data,
            });
         })
         .catch(function (error) {
            // handle error
            console.log(error);
         })
         .finally(function () {
            // always executed
         });
   }

   checkIsInStock(id) {
      console.log("toggled");
      this.setState({ idstest: [...this.state.idstest, id] });

      if (this.state.isInStock === true) {
         this.setState({ isInStock: false });
      } else {
         this.setState({ isInStock: true });
         console.log("hello");
      }
   }

   // function to get the id of the ingredient which is toggled to false\
   // getOutOfStockIngredientId() {
   //    const outOfStock = [];
   //    console.log(outOfStock);

   //    this.props.allRecipes.map((recipe) => {
   //       return recipe.ingredients.map((ingredient) => {
   //          if (ingredient.isInStock === false) {
   //             outOfStock.push(ingredient.id);
   //          }
   //          if (ingredient.isInStock === true) {
   //             outOfStock.pop(ingredient.id);
   //          }
   //       });
   //    });
   // if (this.props.ingredient.ingredients === true) {
   //    return this.props.ingredient.ingredients.id;
   // then push id to empty array of out of stock ingredients
   // use same mapping for recipe and ingredient and
   // if ingredient.ingredients.id === false return ingredient.ingredients.id

   render() {
      console.log(this.state.idstest);

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
                     {this.props.allRecipes.map((recipe) => {
                        return recipe.ingredients.map((ingredient) => {
                           return (
                              <>
                                 <ul className="list-group list-group-flush">
                                    <div className="custom-control custom-switch ">
                                       <div className="row">
                                          <input
                                             type="checkbox"
                                             className="custom-control-input col-1"
                                             id={ingredient.ingredient}
                                             defaultChecked
                                             isInStock={ingredient.isInStock}
                                             onClick={() => {
                                                this.checkIsInStock(
                                                   ingredient.id
                                                );
                                             }}
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
                        });
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
   };
}
export default connect(mapStateToProps)(Pantry);
