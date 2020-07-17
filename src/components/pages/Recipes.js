import React from "react";
import Navigation from "../ui/Navigation";
import recipeImg from "../../img/heather-mckean-1I9bMlIAIBM-unsplash.jpg";
import AppTemplate from "../ui/AppTemplate";
import classnames from "classnames";
import { checkIsOver } from "../../utilis/helpers";
import AddIngredient from "../ui/AddIngredient";
import { connect } from "react-redux";

class Recipes extends React.Component {
   constructor(props) {
      super(props);
      console.log("edward is here reciepes");
      this.state = {
         isClicked: false,
         ingredientsAdded: [],
         titletext: "",
         value: "",
         isFavorite: false,
         directionsText: "",
      };
      this.handleSubmitNow = this.handleSubmitNow.bind(this);
   }
   isFavoriteRecipe() {
      console.log("this better fucking work");
      this.setState({
         isFavorite: !this.state.isFavorite,
      });
   }

   handleSubmitNow(event) {
      const userMealFor = this.state.value;
      const userCookTime = this.state.value;

      event.preventDefault();
      console.log(userMealFor);
      console.log(userCookTime);
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
   checkHasInvalidCharCountDirections() {
      if (
         this.state.directionsText.length <= 0 ||
         this.state.directionsText.length > 1000
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
   setDirectionsText(e) {
      console.log(e.target, e.target.value);
      this.setState({ directionsText: e.target.value });
   }
   submitrecipe(e) {
      const userRecipeTitle = document.getElementById("inputed-recipe-title")
         .value;
      const userCookTime = this.state.value;
      const userMealFor = this.state.value;

      const userServingSize = document.getElementById("serving-size").value;
      const userDirections = document.getElementById("inputed-dir").value;

      const submittedRecipe = {
         recipeId: String,
         recipeTitle: userRecipeTitle,
         servingSize: userServingSize,
         cookTime: userCookTime,
         mealFor: userMealFor,
         directions: userDirections,
      };
      console.log("data", submittedRecipe, this.state.value);
   }
   render() {
      return (
         <>
            <Navigation />
            <AppTemplate>
               <div className="col-12 col-xl-5">
                  <h3 className="text-center">Add Your Recipes</h3>

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
                           Recipe Title:
                        </label>
                        <input
                           type="text"
                           id="inputed-recipe-title"
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
                     <div className="form-row ">
                        <div className="form-group col-5">
                           <label htmlFor="inputState">Cook-Time:</label>
                           <select
                              id="input-cook"
                              className="form-control "
                              // value={this.state.value}
                              // onChange={this.handleChangeNow}
                           >
                              <option defaultValue>
                                 {/* {
                                    this.props.editableRecipe.editableRecipe
                                       .cookTime
                                 } */}{" "}
                                 Choose
                              </option>
                              <option value="10-20 Mins"> 10-20 Mins</option>
                              <option value="20-30 Mins"> 20-30 Mins</option>
                              <option value="30 and Up"> 30 and Up </option>
                           </select>
                        </div>

                        <div className="col-5">
                           <label htmlFor="inputState">Meal For:</label>
                           <select
                              id="inputState"
                              className="form-control"
                              // value={this.state.value}
                              // onChange={this.handleChangeNow}
                           >
                              <option defaultValue>
                                 {/* {
                                    this.props.editableRecipe.editableRecipe
                                       .mealFor
                                 } */}{" "}
                                 Choose
                              </option>
                              <option value="Breakfast">Breakfast</option>
                              <option value="Brunch">Brunch</option>
                              <option value="Lunch">Lunch</option>
                              <option value="Dinner">Dinner</option>
                           </select>
                        </div>
                        <div className="form-group col-2 ">
                           <label htmlFor="serving-size ">Serves:</label>
                           <input
                              type="text"
                              id="serving-size"
                              className="form-control "
                              // defaultValue={
                              //    this.props.editableRecipe.editableRecipe
                              //       .servingSize
                              // }
                           ></input>
                        </div>
                     </div>
                     <AddIngredient />

                     <div className="py-4">
                        <label
                           className={classnames({
                              "text-danger": checkIsOver(
                                 this.state.directionsText,
                                 1000
                              ),
                           })}
                        >
                           Directions:
                        </label>
                        <textarea
                           id="inputed-dir"
                           // className="w-100 form-control mb-2"
                           className={classnames({
                              "w-100": true,
                              "mb-2": true,
                              "form-control": true,
                              "is-invalid": checkIsOver(
                                 this.state.directionsText,
                                 1000
                              ),

                              "text-danger": checkIsOver(
                                 this.state.directionsText,
                                 1000
                              ),
                           })}
                           rows="15"
                           onChange={(e) => this.setDirectionsText(e)}
                           // defaultValue={
                           //    this.props.editableRecipe.editableRecipe
                           //       .directions
                           // }
                        ></textarea>
                        <small
                           className={classnames({
                              "float-right": true,
                              "text-danger": checkIsOver(
                                 this.state.directionsText,
                                 1000
                              ),
                           })}
                        >
                           {this.state.directionsText.length}/1000
                        </small>
                     </div>

                     <button className="btn btn-danger mr-5">
                        Delete Recipe
                     </button>

                     <div className="float-right mb-5">
                        <button
                           className={classnames({
                              btn: true,
                              "btn-secondary": true,
                              disabled: this.checkHasInvalidCharCountDirections(),
                           })}
                           type="button"
                           // className="btn btn-primary"
                           onClick={(e) => {
                              this.submitrecipe(e);
                           }}
                        >
                           ADD Recipe
                        </button>
                     </div>

                     {/* <div className="form-check ">
                        <input
                           // defaultChecked={this.state.isFavorite}
                           className="form-check-input"
                           type="checkbox"
                           id="gridCheck"
                           onClick={() => {
                              this.isFavoriteRecipe();
                           }}
                        />
                        <label className="form-check-label" htmlFor="gridCheck">
                           Add to favorite Recipes
                        </label>
                     </div> */}

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
function mapStateToProps(state) {
   return {
      editableRecipe: state.editableRecipe,
   };
}
export default connect(mapStateToProps)(Recipes);
