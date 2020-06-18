import React from "react";
import Navigation from "../ui/Navigation";
import recipeImg from "../../img/jason-leung-CWxidfNz-Co-unsplash (1).jpg";
import AppTemplate from "../ui/AppTemplate";
import plus from "../../icons/plus.svg";
import minus from "../../icons/minus.svg";
export default class Recipes extends React.Component {
   constructor(props) {
      super(props);
      console.log("edward is here reciepes");
      this.state = {
         isClicked: false,
         ingredientsAdded: [],
      };
   }
   addIngredients() {
      console.log("edward click this shit");
      this.setState({
         ingredientsAdded: [...this.state.ingredientsAdded, ""],
      });
   }
   render() {
      return (
         <>
            <Navigation />
            <AppTemplate>
               <div className="col-12 col-xl-5">
                  <h3 className="text-center">
                     Impressive collection of Recipes
                  </h3>

                  <form>
                     <div className="form-group">
                        <label htmlFor="inputAddress">Recipe Title</label>
                        <input
                           type="text"
                           className="form-control"
                           id="inputAddress"
                        />
                        <small className="float-right">0/30</small>
                     </div>
                     <div className="form-row">
                        <div className="form-group col-md-6">
                           <label htmlFor="inputState">Cook-Time</label>
                           <select id="inputState" className="form-control">
                              <option defaultValue>Choose...</option>
                              <option>5-10 mins</option>
                              <option>10-20 mins</option>
                              <option>30 or more mins</option>
                           </select>
                        </div>

                        <div className="form-group col-md-6">
                           <label htmlFor="inputState">Meal For</label>
                           <select id="inputState" className="form-control">
                              <option defaultValue>Choose...</option>
                              <option>Breakfast</option>
                              <option>Brunch</option>
                              <option>Lunch</option>
                              <option>Dinner</option>
                           </select>
                        </div>
                     </div>

                     <div className="form-row">
                        <div className="form-group col-md-5">
                           <label htmlFor="inputEmail4">Amount</label>
                           <input
                              type="text"
                              className="form-control"
                              id="inputEmail4"
                           />
                        </div>

                        <div className="form-group col-md-6 ">
                           <label htmlFor="inputPassword4">Ingredient</label>
                           <input
                              type="text"
                              className="form-control"
                              id="inputPassword4"
                           />
                        </div>
                        <div className="col-md-1 align-self-center mt-2">
                           <button
                              type="button"
                              className="mt-2 "
                              onClick={(e) => {
                                 this.addIngredients(e);
                              }}
                           >
                              <img
                                 className="py-1"
                                 src={plus}
                                 alt="plus icon"
                              />
                           </button>
                        </div>
                     </div>
                     <div>
                        {this.state.ingredientsAdded.map(
                           (ingredient, index) => {
                              return (
                                 <div key={index} className="form-row">
                                    <div className="form-group col-md-5 ">
                                       <label>Amount</label>
                                       <input
                                          type="text"
                                          className="form-control"
                                       />
                                    </div>

                                    <div className="form-group col-md-6 ">
                                       <label>Ingredient</label>
                                       <input
                                          type="text"
                                          className="form-control"
                                       />
                                    </div>
                                    <div className="col-md-1 align-self-center mt-2">
                                       <button
                                          type="button"
                                          className="mt-2"
                                          onClick={(e) => {
                                             this.addIngredients(e);
                                          }}
                                       >
                                          <img
                                             className="py-1"
                                             src={minus}
                                             alt="plus icon"
                                          />
                                       </button>
                                    </div>
                                 </div>
                              );
                           }
                        )}
                     </div>

                     <div>
                        <label>Directions:</label>
                        <textarea className="w-100" rows="15"></textarea>
                     </div>

                     <button className="btn btn-danger mr-5">
                        Delete Recipe
                     </button>

                     <div className="float-right mb-5">
                        <button className="btn btn-primary">ADD Recipe</button>
                        <div className="form-group ">
                           <div className="form-check">
                              <input
                                 className="form-check-input"
                                 type="checkbox"
                                 id="gridCheck"
                              />
                              <label
                                 className="form-check-label"
                                 htmlFor="gridCheck"
                              >
                                 Add to favorite Recipes
                              </label>
                           </div>
                        </div>
                     </div>
                     <div className="clearfix"></div>
                  </form>
               </div>
               <div className="col-xl-6 ">
                  <img src={recipeImg} alt="" className="recipeImage"></img>
               </div>
            </AppTemplate>
         </>
      );
   }
}
