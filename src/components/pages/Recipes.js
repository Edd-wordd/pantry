import React from "react";
import Navigation from "../ui/Navigation";
import recipeImg from "../../img/jason-leung-CWxidfNz-Co-unsplash (1).jpg";
import AppTemplate from "../ui/AppTemplate";

import recipeCards from "../../mock data/recipe-card";
import classnames from "classnames";
import { checkIsOver } from "../../utilis/helpers";
import AddIngredient from "../ui/AddIngredient";

const recipeCard = recipeCards[2];

export default class Recipes extends React.Component {
   constructor(props) {
      super(props);
      console.log("edward is here reciepes");
      this.state = {
         isClicked: false,
         ingredientsAdded: [],
         titletext: recipeCard.recipeTitle,
      };
   }
   addIngredients() {
      console.log("edward click this shit");
      this.setState({
         ingredientsAdded: [...this.state.ingredientsAdded, ""],
      });
   }
   handleChange(e, index) {
      this.setState({ ingredientsAdded: [...this.state.ingredientsAdded] });
      [index] = e.target.value;
      this.setState({ ingredientsAdded: this.state.ingredientsAdded });
   }
   removeIngredient(index) {
      this.state.ingredientsAdded.splice(index, 1);
      this.setState({ ingredientsAdded: this.state.ingredientsAdded });
   }
   checkHasInvalidCharCount() {
      if (
         this.state.titletext.length <= 0 ||
         this.state.titletext.length > 30
      ) {
         return true;
      } else {
         return false;
      }
   }

   setAnswerText(e) {
      console.log(e.target, e.target.value);
      this.setState({ titletext: e.target.value });
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
                        <label
                           htmlFor="inputAddress"
                           className={classnames({
                              "text-danger": checkIsOver(
                                 this.state.titletext,
                                 30
                              ),
                           })}
                        >
                           Recipe Title
                        </label>
                        <input
                           type="text"
                           className={classnames({
                              "form-control": true,
                              "is-invalid": checkIsOver(
                                 this.state.titletext,
                                 30
                              ),

                              "text-danger": checkIsOver(
                                 this.state.titletext,
                                 30
                              ),
                           })}
                           id="inputAddress"
                           onChange={(e) => this.setAnswerText(e)}
                        />

                        <small
                           className={classnames({
                              "float-right": true,
                              "text-danger": checkIsOver(
                                 this.state.titletext,
                                 30
                              ),
                           })}
                        >
                           {this.state.titletext.length}/30
                        </small>
                     </div>
                     <div className="form-row">
                        <div className="form-group col-md-6">
                           <label htmlFor="inputState">Cook-Time</label>
                           <select id="inputState" className="form-control">
                              <option defaultValue>Choose...</option>
                              <option> 10-20 Mins</option>
                              <option> 20-30 Mins</option>
                              <option> 30 and Up </option>
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
                     <AddIngredient />

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
               <div className="col-xl-6">
                  <img src={recipeImg} alt="" className="recipeImage"></img>
               </div>
            </AppTemplate>
         </>
      );
   }
}
