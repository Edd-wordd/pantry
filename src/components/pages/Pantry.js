import React from "react";
import Navigation from "../ui/Navigation";
import AppTemplate from "../ui/AppTemplate";
// import AddPantryIngredient from "../ui/AddPantryIngredient";
// import ingredients from "../../mock data/ingredients";
import axios from "axios";
import { connect } from "react-redux";

class Pantry extends React.Component {
   constructor(props) {
      super(props);
      axios
         .get(
            "https://raw.githubusercontent.com/Edd-wordd/pantry/master/src/mock%20data/recipes.JSON"
         )
         .then(function (response) {
            // handle success
            console.log(response);
         })
         .catch(function (error) {
            // handle error
            console.log(error);
         })
         .finally(function () {
            // always executed
         });
   }
   render() {
      return (
         <>
            <Navigation />
            <AppTemplate>
               <div className=" mb-3 offset-1 col-10 col-xl-5">
                  {/* <div className="card-body "> */}
                  {/* <h5 className="card-title ">Pantry Inventory</h5> */}
                  {/* </div> */}
                  <fieldset>
                     <legend>
                        <h5 className="card-title ">Pantry Inventory</h5>
                     </legend>

                     {this.props.allRecipes.map((recipe) => {
                        return (
                           // <AddPantryIngredient
                           //    ingredientAmount={ingredient.ingredientAmount}
                           //    ingredients={ingredient.ingredient}
                           //    inStock={ingredient.isInStock}
                           //    key={ingredient.id}
                           // />
                           <>
                              <ul className="list-group list-group-flush">
                                 <div className="custom-control custom-switch ">
                                    <div className="row">
                                       <input
                                          type="checkbox"
                                          className="custom-control-input col-1"
                                          id={recipe.id}
                                          defaultChecked
                                       />

                                       <label
                                          className="custom-control-label"
                                          htmlFor={recipe.id}
                                       >
                                          In-Stock
                                       </label>

                                       <li className=" col-6">
                                          {recipe.ingredient}
                                       </li>
                                       <button className="btn btn-danger btn-sm col-3">
                                          delete
                                       </button>
                                    </div>
                                    <hr />
                                 </div>
                              </ul>
                           </>
                        );
                     })}
                  </fieldset>
               </div>
            </AppTemplate>
         </>
      );
   }
}

// export default function Pantry() {
// axios
//    .get(
//       "https://raw.githubusercontent.com/Edd-wordd/pantry/master/src/mock%20data/recipes.JSON"
//    )
//    .then(function (response) {
//       // handle success
//       console.log(response);
//    })
//    .catch(function (error) {
//       // handle error
//       console.log(error);
//    })
//    .finally(function () {
//       // always executed
//    });
// return (
// <>
//    <Navigation />
//    <AppTemplate>
//       <div className=" mb-3 offset-1 col-10 col-xl-5">
//          {/* <div className="card-body "> */}
//          {/* <h5 className="card-title ">Pantry Inventory</h5> */}
//          {/* </div> */}
//          <fieldset>
//             <legend>
//                <h5 className="card-title ">Pantry Inventory</h5>
//             </legend>

//             {/* {ingredients.map((ingredient) => {
//                return (
//                   <AddPantryIngredient
//                      ingredientAmount={ingredient.ingredientAmount}
//                      ingredients={ingredient.ingredient}
//                      inStock={ingredient.isInStock}
//                      key={ingredient.id}
//                   />
//                );
//             })} */}
//          </fieldset>
//       </div>
//    </AppTemplate>
// </>
// );
// }
function mapStateToProps(state) {
   return {
      allRecipes: state.allRecipes,
   };
}
export default connect(mapStateToProps)(Pantry);
