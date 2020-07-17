import React from "react";
import plus from "../../icons/plus.svg";
import minus from "../../icons/minus.svg";
import recipes from "../../mock data/recipe-card";
import axios from "axios";

export default class AddIngredient extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         isClicked: false,
         ingredientsAdded: [],
         titletext: recipes.title,
      };
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
                     className="mt-2 btn "
                     onClick={(e) => {
                        this.addIngredients(e);
                     }}
                  >
                     <img className="py-1" src={plus} alt="plus icon" />
                  </button>
               </div>
            </div>
            <div>
               {this.state.ingredientsAdded.map((index) => {
                  return (
                     <div key={index} className="form-row">
                        <div className="form-group col-md-5 ">
                           <label>Amount</label>
                           <input
                              type="text"
                              className="form-control"
                              onChange={(e) => this.handleChange(e, index)}
                              id="inputed-amount"
                           />
                        </div>

                        <div className="form-group col-md-6 ">
                           <label>Ingredient</label>
                           <input type="text" className="form-control" />
                        </div>
                        <div className="col-md-1 align-self-center mt-2">
                           <button
                              type="button"
                              className="mt-2 btn"
                              onClick={() => {
                                 this.removeIngredient(index);
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
               })}
            </div>
         </>
      );
   }
}
