import React from "react";

import recipeCards from "../../mock data/recipe-card";
const recipeCard = recipeCards[2];

export default class AddPantryIngredient extends React.Component {
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

   setAnswerText(e) {
      console.log(e.target, e.target.value);
      this.setState({ titletext: e.target.value });
   }
   render() {
      return (
         <>
            <ul className="list-group list-group-flush">
               <div className="custom-control custom-switch ">
                  <div className="row">
                     <input
                        type="checkbox"
                        className="custom-control-input col-1"
                        id="custom3"
                        defaultChecked
                     />

                     <label className="custom-control-label" htmlFor="custom3">
                        In- Stock
                     </label>
                     <li className=" col-6">cucumbers</li>
                     <button className="btn btn-danger btn-sm col-3">
                        delete
                     </button>
                  </div>
                  <hr />
               </div>
               <div className="custom-control custom-switch">
                  <div className="row">
                     <input
                        type="checkbox"
                        className="custom-control-input col-1"
                        id="custom2"
                        defaultChecked
                     />

                     <label className="custom-control-label" htmlFor="custom2">
                        In- Stock
                     </label>
                     <li className=" col-6">pasta</li>
                     <button className="btn btn-danger btn-sm col-3">
                        delete
                     </button>
                  </div>
                  <hr />
               </div>
               <div className="custom-control custom-switch">
                  <div className="row">
                     <input
                        type="checkbox"
                        className="custom-control-input col-1"
                        id="custom1"
                        defaultChecked
                     />

                     <label className="custom-control-label" htmlFor="custom1">
                        In- Stock
                     </label>

                     <li className=" col-6">onions</li>

                     <button className="btn btn-danger btn-sm col-3">
                        delete
                     </button>
                  </div>
                  <hr />
               </div>
            </ul>
         </>
      );
   }
}
